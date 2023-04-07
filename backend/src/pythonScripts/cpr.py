from topsis import Topsis
from pymongo import MongoClient
import json
import networkx as nx
import pandas as pd
import itertools
import math

stockNames = 'AMD ADBE ABNB ALGN AMZN AMGN AEP ADI ANSS AAPL AMAT ASML TEAM ADSK ATVI ADP AZN BKR AVGO BIIB BMRN BKNG CDNS CHTR CPRT CSGP CRWD CTAS CSCO CMCSA COST CSX CTSH DDOG DXCM FANG DLTR EA EBAY ENPH EXC FAST GFS META FISV FTNT GILD GOOG GOOGL HON ILMN INTC INTU ISRG MRVL IDXX JD KDP KLAC KHC LRCX LCID LULU MELI MAR MCHP MDLZ MRNA MNST MSFT MU NFLX NVDA NXPI ODFL ORLY PCAR PANW PAYX PDD PYPL PEP QCOM REGN RIVN ROST SIRI SGEN SBUX SNPS TSLA TXN TMUS VRSK VRTX WBA WBD WDAY XEL ZM ZS'

stockNames = stockNames.split(' ')

def get_database():
  url = "mongodb+srv://aryakumar6190:hku123@cluster0.n1j4dnq.mongodb.net/?retryWrites=true&w=majority"
  client = MongoClient(url)
  return client['FYP']

db = get_database()
collection2 = db["stock_decision_matrix"]
normalized_decisionMatrix = pd.DataFrame(collection2.find())
index = normalized_decisionMatrix.symbol
normalized_decisionMatrix = normalized_decisionMatrix.criteria.apply(pd.Series)
normalized_decisionMatrix.index = index

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

evaluation_matrix = normalized_decisionMatrix
criteria_direction = [True, True, True]

weights_list = list(weights.values())
t = Topsis(evaluation_matrix, weights_list, criteria_direction)
t.calc()
rankings = t.rank_to_worst_similarity()

print(json.dumps(pd.DataFrame(rankings,index=stockNames)[0].to_dict()))
