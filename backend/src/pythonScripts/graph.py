import yfinance
import numpy
import pandas
import datetime
import matplotlib
import warnings
import netgraph

import yfinance as yf
from datetime import datetime, timedelta, date
import numpy as np
import pandas as pd

# Returns Dataframe of company: (index) Date, Open, High, Low, Close, Volume, Dividends, Stock Splits
def getStockHistory(stockName, timeDiffInYears=1):
#   tickerInstance = yf.Ticker(stockName, progress=False)
#   end_date = datetime.now().strftime('%Y-%m-%d')
#   start_date = ( datetime.now() - timedelta(days= 365.24 * timeDiffInYears) ).strftime('%Y-%m-%d')
  start_date = date.today() - timedelta(days=1) - timedelta(days=364)
  end_date = date.today() - timedelta(days=1)
  print(stockName, start_date, end_date)
  history = yf.download(stockName, start=start_date, end=end_date,progress=False)
#   history = tickerInstance.history(start = start_date, end = end_date)
  return history

# Returns Series(?)
def stockHistoryToDailyPrice(history):
  daily_prices = history['Open']
  return daily_prices

def stockHistoryToDailyVolume(history):
  daily_volumes = history['Volume']
  return daily_volumes[1:]

# Return Series with daily price return values, date as index
def dailyPriceToDailyPriceReturn(daily_price):
  dates = daily_price[1:].index
  temp = daily_price[1:].reset_index()['Open'] / daily_price[:-1].reset_index()['Open']
  temp = temp.apply(np.log)
  daily_price_return = pd.DataFrame({'Price Return': temp.values}, index=dates)
  return daily_price_return['Price Return'] # Remove column selection to get dataframe instead of series

def cross_correlation(timeSeries1, timeSeries2):
  xi_, xj_ = timeSeries1.mean(), timeSeries2.mean()
  len = timeSeries1.size
  numerator, denominator1, denominator2 = 0, 0, 0
  for t in range(len):
    xi, xj = timeSeries1.iloc[t], timeSeries2.iloc[t]
    numerator += (xi - xi_) * (xj - xj_)
    denominator1 += (xi - xi_) ** 2
    denominator2 += (xj - xj_) ** 2
  c = numerator / ( (denominator1 ** 0.5) * (denominator2 ** 0.5) )
  return c

import itertools

# 15 most popularly traded stocks
stockNames = 'AAPL TLSA IDXX COST ROST FAST EA ADBE QCOM PCAR MSFT GOOG'.split(' ')
print(stockNames)
stockHistories = {}

for stockName in stockNames:
  stockHistories[stockName] = getStockHistory(stockName)

correlationTable = pd.DataFrame(0.0, index = stockNames, columns=stockNames)

for pair in itertools.product(stockNames, repeat=2):
  s1, s2 = pair
  stock1_dailyClosePrice, stock2_dailyClosePrice = stockHistories[s1]['Close'], stockHistories[s2]['Close']
  
  if stock1_dailyClosePrice.size != stock2_dailyClosePrice.size:
    stock1_dailyClosePrice.set_axis( map(lambda x: x.date(), list(stock1_dailyClosePrice.index)) )
    stock2_dailyClosePrice.set_axis( map(lambda x: x.date(), list(stock2_dailyClosePrice.index)) )

    totalDates = list(set(stock1_dailyClosePrice.index).union(set(stock2_dailyClosePrice.index)))

    stock1_dailyClosePrice = pd.Series(stock1_dailyClosePrice ,index=totalDates)
    stock2_dailyClosePrice = pd.Series(stock2_dailyClosePrice ,index=totalDates)

    stock1_dailyClosePrice = stock1_dailyClosePrice.fillna(method='ffill')
    stock2_dailyClosePrice = stock2_dailyClosePrice.fillna(method='ffill')
    stock1_dailyClosePrice = stock1_dailyClosePrice.fillna(method='bfill')
    stock2_dailyClosePrice = stock2_dailyClosePrice.fillna(method='bfill')

  # print(stock1_dailyClosePrice)

  # stock1_dailyVolume, stock2_dailyVolume = stockHistories[s1]['Volume'], stockHistories[s2]['Volume']
  # stock1_dailyPriceReturn, stock2_dailyPriceReturn = dailyPriceToDailyPriceReturn(stock1_dailyClosePrice), dailyPriceToDailyPriceReturn(stock2_dailyClosePrice)
  correlationTable[s1][s2] = cross_correlation(stock1_dailyClosePrice, stock2_dailyClosePrice)

# discarding correlation in the range -0.5 to 0.5
# for now discard negative values too since haven't thought of how to use that in the graph
# Taking inverse of correlation to be the distance
# Minus 1 to make diagonal 0 (distance of something to itself should be )
adjacencyMatrix = 1 / correlationTable[correlationTable > 0.5] - 1
adjacencyMatrix = adjacencyMatrix[adjacencyMatrix >= 0]

adjacencyMatrix *= 10

import networkx as nx
import matplotlib.pyplot as plt

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
# stock = 'TSLA'
# l=2
# print(list(shortestPathLengths[stock][shortestPathLengths[stock] <= l].index))
# H[stock][list(shortestPathLengths[stock][shortestPathLengths[stock] <= l].index)]

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

# 3.2 Correlation matrix based on relative entorpy

# Symmetric Correlation Matrix (U)
# print(P,'\n---------------------------')
U = pd.DataFrame(index=stockNames, columns=stockNames)
for pair in itertools.product(stockNames, repeat=2):
  i, j = pair
  u_corr = 0
  for l in range(1, math.ceil(L)):
    try:
      u_corr += P[i][l-1] * math.log(P[i][l-1]/P[j][l-1])
      u_corr += P[j][l-1] * math.log(P[j][l-1]/P[i][l-1])
    except:
        pass
    #   print(i,j, l)
    #   print(P[j])
    #   print(P[j][l-1],P[i][l-1])
  U.at[i,j] = u_corr

S = 1 - U / U.max().max()

# 3.3 CPR TOPSIS

# Creating Adjacency Matrix. If nodes are adjacent, A(i,j) = S(i,j)
A = pd.DataFrame(index = stockNames, columns = stockNames)
for pair in itertools.product(stockNames, repeat=2):
  i, j = pair
  if math.isnan(adjacencyMatrix.at[i,j]) and i!=j:
    A.at[i,j] = 0.0
  else:
    A.at[i,j] = S.at[i,j]

# Using generated Code. Semi local Centrality

def semi_local_centrality(G, node):
    neighborhood = set(nx.all_neighbors(G, node))
    neighborhood
    subgraph = G.subgraph(neighborhood)
    semi_local = sum([nx.shortest_path_length(subgraph, node, n) for n in neighborhood])
    semi_local /= len(neighborhood)
    return semi_local

G = nx.from_pandas_adjacency(A.astype('float64'))
semi_local_centralities = {node: semi_local_centrality(G, node) for node in G.nodes()}
semi_local_centralities

# Shortest Path Centrality
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

for col_name, col_data in normalized_decisionMatrix.iteritems():
  Y[col_name] = (-1/math.log(len(stockNames))) * sum([x * math.log(x) if x>0 else 0 for x in col_data])


for col in criteria:
  weights[col] = Y[col] / sum(Y.values())

# https://github.com/Glitchfix/TOPSIS-Python

import numpy as np
import warnings


class Topsis():
    evaluation_matrix = np.array([])  # Matrix
    weighted_normalized = np.array([])  # Weight matrix
    normalized_decision = np.array([])  # Normalisation matrix
    M = 0  # Number of rows
    N = 0  # Number of columns

    '''
	Create an evaluation matrix consisting of m alternatives and n criteria,
	with the intersection of each alternative and criteria given as {\displaystyle x_{ij}}x_{ij},
	we therefore have a matrix {\displaystyle (x_{ij})_{m\times n}}(x_{{ij}})_{{m\times n}}.
	'''

    def __init__(self, evaluation_matrix, weight_matrix, criteria):
        # M×N matrix
        self.evaluation_matrix = np.array(evaluation_matrix, dtype="float")

        # M alternatives (options)
        self.row_size = len(self.evaluation_matrix)

        # N attributes/criteria
        self.column_size = len(self.evaluation_matrix[0])

        # N size weight matrix
        self.weight_matrix = np.array(weight_matrix, dtype="float")
        self.weight_matrix = self.weight_matrix/sum(self.weight_matrix)
        self.criteria = np.array(criteria, dtype="float")

    '''
	# Step 2
	The matrix {\displaystyle (x_{ij})_{m\times n}}(x_{{ij}})_{{m\times n}} is then normalised to form the matrix
	'''

    def step_2(self):
        # normalized scores
        self.normalized_decision = np.copy(self.evaluation_matrix)
        sqrd_sum = np.zeros(self.column_size)
        for i in range(self.row_size):
            for j in range(self.column_size):
                sqrd_sum[j] += self.evaluation_matrix[i, j]**2
        for i in range(self.row_size):
            for j in range(self.column_size):
                self.normalized_decision[i,
                                         j] = self.evaluation_matrix[i, j]/(sqrd_sum[j]**0.5)

    '''
	# Step 3
	Calculate the weighted normalised decision matrix
	'''

    def step_3(self):
        from pdb import set_trace
        self.weighted_normalized = np.copy(self.normalized_decision)
        for i in range(self.row_size):
            for j in range(self.column_size):
                self.weighted_normalized[i, j] *= self.weight_matrix[j]

    '''
	# Step 4
	Determine the worst alternative {\displaystyle (A_{w})}(A_{w}) and the best alternative {\displaystyle (A_{b})}(A_{b}):
	'''

    def step_4(self):
        self.worst_alternatives = np.zeros(self.column_size)
        self.best_alternatives = np.zeros(self.column_size)
        for i in range(self.column_size):
            if self.criteria[i]:
                self.worst_alternatives[i] = min(
                    self.weighted_normalized[:, i])
                self.best_alternatives[i] = max(self.weighted_normalized[:, i])
            else:
                self.worst_alternatives[i] = max(
                    self.weighted_normalized[:, i])
                self.best_alternatives[i] = min(self.weighted_normalized[:, i])

    '''
	# Step 5
	Calculate the L2-distance between the target alternative {\displaystyle i}i and the worst condition {\displaystyle A_{w}}A_{w}
	{\displaystyle d_{iw}={\sqrt {\sum _{j=1}^{n}(t_{ij}-t_{wj})^{2}}},\quad i=1,2,\ldots ,m,}
	and the distance between the alternative {\displaystyle i}i and the best condition {\displaystyle A_{b}}A_b
	{\displaystyle d_{ib}={\sqrt {\sum _{j=1}^{n}(t_{ij}-t_{bj})^{2}}},\quad i=1,2,\ldots ,m}
	where {\displaystyle d_{iw}}d_{{iw}} and {\displaystyle d_{ib}}d_{{ib}} are L2-norm distances 
	from the target alternative {\displaystyle i}i to the worst and best conditions, respectively.
	'''

    def step_5(self):
        self.worst_distance = np.zeros(self.row_size)
        self.best_distance = np.zeros(self.row_size)

        self.worst_distance_mat = np.copy(self.weighted_normalized)
        self.best_distance_mat = np.copy(self.weighted_normalized)

        sqrd_sum = np.zeros(self.column_size)
        for i in range(self.row_size):
            for j in range(self.column_size):
                sqrd_sum[j] += self.evaluation_matrix[i, j]**2

        for i in range(self.row_size):
            for j in range(self.column_size):
                self.worst_distance_mat[i][j] = ((self.weighted_normalized[i][j]-self.worst_alternatives[j]) / sqrd_sum[j]**0.5)**2
                self.best_distance_mat[i][j] = ((self.weighted_normalized[i][j]-self.best_alternatives[j]) / sqrd_sum[j]**0.5)**2
                
                self.worst_distance[i] += self.worst_distance_mat[i][j]
                self.best_distance[i] += self.best_distance_mat[i][j]

        for i in range(self.row_size):
            self.worst_distance[i] = self.worst_distance[i]**0.5
            self.best_distance[i] = self.best_distance[i]**0.5

    '''
	# Step 6
	Calculate the similarity
	'''

    def step_6(self):
        np.seterr(all='ignore')
        self.worst_similarity = np.zeros(self.row_size)
        self.best_similarity = np.zeros(self.row_size)

        for i in range(self.row_size):
            # calculate the similarity to the worst condition
            self.worst_similarity[i] = self.worst_distance[i] / \
                (self.worst_distance[i]+self.best_distance[i])

            # calculate the similarity to the best condition
            self.best_similarity[i] = self.best_distance[i] / \
                (self.worst_distance[i]+self.best_distance[i])
    
    def ranking(self, data):
        return [i+1 for i in data.argsort()]

    def rank_to_worst_similarity(self):
        # return rankdata(self.worst_similarity, method="min").astype(int)
        return self.ranking(self.worst_similarity)

    def rank_to_best_similarity(self):
        # return rankdata(self.best_similarity, method='min').astype(int)
        return self.ranking(self.best_similarity)

    def calc(self):
        self.step_2()
        self.step_3()
        self.step_4()
        self.step_5()
        self.step_6()

evaluation_matrix = decisionMatrix
criteria_direction = [True, True, True]

weights_list = list(weights.values())
t = Topsis(evaluation_matrix, weights_list, criteria_direction)
t.calc()
rankings = t.rank_to_worst_similarity()

pdRankings = pd.DataFrame(rankings,index=stockNames)

visualizationMatrix = adjacencyMatrix[adjacencyMatrix > 0.000001]
visualizationMatrix = visualizationMatrix.fillna(0)

nodeList = map(lambda x: {"id":x}, list(visualizationMatrix.index) )
edgeList = []

for pair in itertools.product(visualizationMatrix.index, repeat=2):
    edgeList.append({
        "source": pair[0],
        "target": pair[1],
        "value": visualizationMatrix[pair[0]][pair[1]]
    })

graphObject = {
    "nodes": nodeList,
    "links":edgeList
}
import json
print(json.dumps(graphObject))