import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt
import math
from Topsis import Topsis
import itertools

class CPR_TOPSIS():

  def __init__(self, correlationTable):
    self.correlationTable = correlationTable
    self.stockNames = list(correlationTable.index)
  
  def step1_getAdjacencyMatrix(self):
    adjacencyMatrix = 1 / self.correlationTable[self.correlationTable > 0.5] - 1
    adjacencyMatrix = adjacencyMatrix[adjacencyMatrix >= 0]
    adjacencyMatrix *= 10
    self.adjacencyMatrix = adjacencyMatrix
  
  def step2_makeIntermediaryGraphObject(self):
    import networkx as nx
    import math
    graph = nx.from_pandas_adjacency(self.adjacencyMatrix)
    graph.name = "Stock Network"
    for edge in graph.edges:
      if math.isnan(graph.edges[edge[0], edge[1]]['weight']):
        graph.remove_edge(edge[0],edge[1])
    self.graph = graph

  def step3_generateCommunicationProbabilitySequences(self):
    import networkx as nx
    import math
    # Compute number and lengths of shortest paths between nodes.
    shortestPathLengths = dict(nx.all_pairs_dijkstra_path_length(self.graph))
    shortestPathCount = dict()
    for pair in itertools.product(self.stockNames, repeat=2):
      source, target = pair
      if source not in shortestPathCount:
        shortestPathCount[source] = dict()
      try:
        shortestPathCount[source][target] = sum([1 for p in nx.all_shortest_paths(self.graph, source, target, weight=lambda x,y,e: self.adjacencyMatrix[x][y])])
      except:
        shortestPathCount[source][target] = 0

    shortestPathLengths = pd.DataFrame(shortestPathLengths)
    shortestPathCount = pd.DataFrame(shortestPathCount)
    
    # Communication Probability Matrix (H)
    H = pd.DataFrame(columns=self.stockNames, index=self.stockNames)

    for pair in itertools.product(self.stockNames, repeat=2):
      source, target = pair
      if source == target:
        H.at[source, target]= 0.0
        continue
      else:
        H.at[source, target] = shortestPathCount.at[source, target] * 1/shortestPathLengths.at[source, target]
    
    L = shortestPathLengths.max().max()
    
    P = dict()
    r = shortestPathLengths.max()

    for stock in self.stockNames:
      P[stock] = []
      for l in range(1, math.ceil(L)):
        if l > r[stock]:
          val = 10**(-3)
        else:
          denominator = H[stock].sum() - H.at[stock,stock] #Should just be 0
          # Confirm Definition of Lth layer neighborhood
          l_th_layer_neighborhood = list(shortestPathLengths[stock][shortestPathLengths[stock] <= l].index) 
          numerator = H[stock][l_th_layer_neighborhood].sum()

          val = numerator / denominator + (10** (-3) if numerator == 0 else 0)

        P[stock].append(val)
    self.P = P
    self.L = L
  
  def step4_generateCorrelationMatrix(self):
    import math
    U = pd.DataFrame(index=self.stockNames, columns=self.stockNames)
    for pair in itertools.product(self.stockNames, repeat=2):
      i, j = pair
      u_corr = 0
      for l in range(1, math.ceil(self.L)):
        try:
          u_corr += self.P[i][l-1] * math.log(self.P[i][l-1]/self.P[j][l-1])
          u_corr += self.P[j][l-1] * math.log(self.P[j][l-1]/self.P[i][l-1])
        except:
          raise Exception("Step 4: Error while genrating Correlation Matrix!")
          print(i,j, l)
          print(self.P[j])
          print(self.P[j][l-1],self.P[i][l-1])
      U.at[i,j] = u_corr
    S = 1 - U / U.max().max()
    self.S = S

  
  def step5_getAMatrix(self):
    import math
    A = pd.DataFrame(index = self.stockNames, columns = self.stockNames)
    for pair in itertools.product(self.stockNames, repeat=2):
      i, j = pair
      if math.isnan(self.adjacencyMatrix.at[i,j]) and i!=j:
        A.at[i,j] = 0.0
      else:
        A.at[i,j] = self.S.at[i,j]
    self.A = A
  
  def step6_makeDecisionMatrix(self):
    import networkx as nx
    import math
    def semi_local_centrality(G, node):
      neighborhood = set(nx.all_neighbors(G, node))
      neighborhood
      subgraph = G.subgraph(neighborhood)
      semi_local = sum([nx.shortest_path_length(subgraph, node, n) for n in neighborhood])
      semi_local /= len(neighborhood)
      return semi_local

    G = nx.from_pandas_adjacency(self.A.astype('float64'))
    semi_local_centralities = {node: semi_local_centrality(G, node) for node in G.nodes()}
    
    shortestPathCentralities = nx.betweenness_centrality(G, weight = "weight")

    G_copy = G.copy()

    def hasDegdNodes(g,d):
      for node in g.nodes():
        if g.degree(node) <= d:
          return True
      return False

    def getDegdNodes(g,d):
      node_list = []
      for node in g.nodes():
        if g.degree(node) <= d:
          node_list.append(node)
      return node_list

    kshell = 1
    kshell_iteration_factor = dict()

    while len(G_copy.nodes()) > 0:
      # If nodes with degree 1
      if hasDegdNodes(G_copy, kshell):
        # Remove them
        bucket = getDegdNodes(G_copy, kshell)
        for node in bucket:
          G_copy.remove_node(node)
          kshell_iteration_factor[node] = kshell
      # Else
      else:
        # Increase kshell iteration factor by 1
        kshell += 1

    combined = dict()
    criteria = ['kshell', 'sp cen.', 'sl cen.']
    for name in self.stockNames:
      sublist = [kshell_iteration_factor[name],
                shortestPathCentralities[name],
                semi_local_centralities[name]]
      combined[name] = sublist

    decisionMatrix = pd.DataFrame.from_dict(combined, orient='index', columns=criteria, dtype='float64')

    normalized_decisionMatrix = pd.DataFrame(index=self.stockNames, columns=criteria, dtype='float64')
    for name in self.stockNames:
      normalization_factor = math.sqrt(sum([x ** 2 for x in decisionMatrix.loc[name]]))
      for col in ['kshell', 'sp cen.', 'sl cen.']:
        normalized_decisionMatrix.at[name,col] = decisionMatrix.at[name,col] / normalization_factor

    normalized_decisionMatrix
    self.normalized_decisionMatrix = normalized_decisionMatrix
  
  def step7_applyTOPSIS(self):
    import math
    PositiveIdeal = self.normalized_decisionMatrix.max()
    NegativeIdeal = self.normalized_decisionMatrix.min()

    weights = dict()
    Y = dict()
    criteria = ['kshell', 'sp cen.', 'sl cen.']

    for col_name in self.normalized_decisionMatrix:
      col_data = self.normalized_decisionMatrix[col_name]
      Y[col_name] = (-1/math.log(len(self.stockNames))) * sum([x * math.log(x) if x>0 else 0 for x in col_data])


    for col in criteria:
      weights[col] = Y[col] / sum(Y.values())

    evaluation_matrix = self.normalized_decisionMatrix
    criteria_direction = [True, True, True]

    weights_list = list(weights.values())
    t = Topsis(evaluation_matrix, weights_list, criteria_direction)
    t.calc()
    rankings = t.rank_to_worst_similarity()
    rankings = [85 - i for i in rankings]
    self.rankings = rankings
  
  def getRankings(self):
    self.step1_getAdjacencyMatrix()
    self.step2_makeIntermediaryGraphObject()
    self.step3_generateCommunicationProbabilitySequences()
    self.step4_generateCorrelationMatrix()
    self.step5_getAMatrix()
    self.step6_makeDecisionMatrix()
    self.step7_applyTOPSIS()

    return self.rankings



