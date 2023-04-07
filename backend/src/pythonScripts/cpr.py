from topsis import Topsis
from pymongo import MongoClient
import json
import networkx as nx
import pandas as pd
import itertools

stockNames = 'AMD ADBE ABNB ALGN AMZN AMGN AEP ADI ANSS AAPL AMAT ASML TEAM ADSK ATVI ADP AZN BKR AVGO BIIB BMRN BKNG CDNS CHTR CPRT CSGP CRWD CTAS CSCO CMCSA COST CSX CTSH DDOG DXCM FANG DLTR EA EBAY ENPH EXC FAST GFS META FISV FTNT GILD GOOG GOOGL HON ILMN INTC INTU ISRG MRVL IDXX JD KDP KLAC KHC LRCX LCID LULU MELI MAR MCHP MDLZ MRNA MNST MSFT MU NFLX NVDA NXPI ODFL ORLY PCAR PANW PAYX PDD PYPL PEP QCOM REGN RIVN ROST SIRI SGEN SBUX SNPS TSLA TXN TMUS VRSK VRTX WBA WBD WDAY XEL ZM ZS'

stockNames = stockNames.split(' ')

def get_database():
  url = "mongodb+srv://aryakumar6190:hku123@cluster0.n1j4dnq.mongodb.net/?retryWrites=true&w=majority"
  client = MongoClient(url)
  return client['FYP']

db = get_database()
collection = db["stock_adjacency_matrix"]

correlationTable = pd.DataFrame(collection.find())
index = correlationTable.symbol
correlationTable = correlationTable.correlations.apply(pd.Series)
correlationTable.index = index

adjacencyMatrix = 1 / correlationTable[correlationTable > 0.5] - 1
adjacencyMatrix = adjacencyMatrix[adjacencyMatrix >= 0]

adjacencyMatrix *= 10

graph = nx.from_pandas_adjacency(adjacencyMatrix)
graph.name = "Stock Network"

import math
for edge in graph.edges:
  if math.isnan(graph.edges[edge[0], edge[1]]['weight']):
    graph.remove_edge(edge[0],edge[1])


shortestPathLengths = dict(nx.all_pairs_dijkstra_path_length(graph))
shortestPathCount = dict()
for pair in itertools.product(stockNames, repeat=2):
  source, target = pair
  if source not in shortestPathCount:
    shortestPathCount[source] = dict()
  try:
    shortestPathCount[source][target] = sum([1 for p in nx.all_shortest_paths(graph, source, target, weight=lambda x,y,e: adjacencyMatrix[x][y])])
  except:
    shortestPathCount[source][target] = 0

# Convert to DataFrame. Might not be needed.
shortestPathLengths = pd.DataFrame(shortestPathLengths)
shortestPathCount = pd.DataFrame(shortestPathCount)

# 3.1 Node Communication Probablity Sequence

# Communictaion Probablity Matrix (H)
H = pd.DataFrame(columns=stockNames, index=stockNames)

for pair in itertools.product(stockNames, repeat=2):
  source, target = pair
  if source == target:
    H.at[source, target]= 0.0
    continue
  else:
    H.at[source, target] = shortestPathCount.at[source, target] * 1/shortestPathLengths.at[source, target]

L = shortestPathLengths.max().max()

P = dict()
r = shortestPathLengths.max()

for stock in stockNames:
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

U = pd.DataFrame(index=stockNames, columns=stockNames)
for pair in itertools.product(stockNames, repeat=2):
  i, j = pair
  u_corr = 0
  for l in range(1, math.ceil(L)):
    try:
      u_corr += P[i][l-1] * math.log(P[i][l-1]/P[j][l-1])
      u_corr += P[j][l-1] * math.log(P[j][l-1]/P[i][l-1])
    except:
      print(i,j, l)
      print(P[j])
      print(P[j][l-1],P[i][l-1])
  U.at[i,j] = u_corr

S = 1 - U / U.max().max()

A = pd.DataFrame(index = stockNames, columns = stockNames)
for pair in itertools.product(stockNames, repeat=2):
  i, j = pair
  if math.isnan(adjacencyMatrix.at[i,j]) and i!=j:
    A.at[i,j] = 0.0
  else:
    A.at[i,j] = S.at[i,j]

def semi_local_centrality(G, node):
    neighborhood = set(nx.all_neighbors(G, node))
    neighborhood
    subgraph = G.subgraph(neighborhood)
    semi_local = sum([nx.shortest_path_length(subgraph, node, n) for n in neighborhood])
    semi_local /= len(neighborhood)
    return semi_local

G = nx.from_pandas_adjacency(A.astype('float64'))
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
for name in stockNames:
  sublist = [kshell_iteration_factor[name],
             shortestPathCentralities[name],
             semi_local_centralities[name]]
  combined[name] = sublist

decisionMatrix = pd.DataFrame.from_dict(combined, orient='index', columns=criteria, dtype='float64')

# Normalize the decision Matrix
normalized_decisionMatrix = pd.DataFrame(index=stockNames, columns=criteria, dtype='float64')
for name in stockNames:
  normalization_factor = math.sqrt(sum([x ** 2 for x in decisionMatrix.loc[name]]))
  for col in ['kshell', 'sp cen.', 'sl cen.']:
    normalized_decisionMatrix.at[name,col] = decisionMatrix.at[name,col] / normalization_factor

PositiveIdeal = normalized_decisionMatrix.max()
NegativeIdeal = normalized_decisionMatrix.min()

weights = dict()
Y = dict()
criteria = ['kshell', 'sp cen.', 'sl cen.']

for col_name in normalized_decisionMatrix:
  col_data = normalized_decisionMatrix[col_name]
  Y[col_name] = (-1/math.log(len(stockNames))) * sum([x * math.log(x) if x>0 else 0 for x in col_data])


for col in criteria:
  weights[col] = Y[col] / sum(Y.values())

evaluation_matrix = decisionMatrix
criteria_direction = [True, True, True]

weights_list = list(weights.values())
t = Topsis(evaluation_matrix, weights_list, criteria_direction)
t.calc()
rankings = t.rank_to_worst_similarity()

print(json.dumps(pd.DataFrame(rankings,index=stockNames)[0].to_dict()))
