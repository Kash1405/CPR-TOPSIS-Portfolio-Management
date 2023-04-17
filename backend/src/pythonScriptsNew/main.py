from CPR_TOPSIS import CPR_TOPSIS
from StockGraph import StockGraph

def selectCorrelationMatrix(selectStocks=["All"], nMonths=1, correlationType="dailyPriceReturn"):
  import pandas as pd
  import io
  import numpy as np
  full_df = pd.read_csv(f'./src/pythonScriptsNew/data/{nMonths}-{correlationType}.csv', index_col=0)
  full_df = pd.DataFrame(full_df, dtype=np.float64)
  if selectStocks[0] == "All":
    return full_df
  else:
    subset = full_df[selectStocks]
    subset = subset.T
    subset = subset[selectStocks]
    return subset

# Args: nMonths, correlationType, CPR, filterCorrMatValuesWhichAre, keepSimilarNodesClose, cluster, subset
if __name__ == "__main__":
  import sys

  subset = sys.argv[7].split(' ')
  
  corrMat = selectCorrelationMatrix(selectStocks=subset, nMonths=int(sys.argv[1]), correlationType=sys.argv[2])
  stockNames = list(corrMat.index)

  top10 = []

  # CPR-TOPSIS
  if sys.argv[3] == "True":
    cpr = CPR_TOPSIS(corrMat)
    rankings = cpr.getRankings()
    top10 = [stockNames[i] for i in range(len(stockNames)) if rankings[i] <=10]

  # Graph visualization
  graphObj = StockGraph(corrMat, fileName=f"../frontend/src/pages/dynamic.jpg", filterCorrMatValuesWhichAre=sys.argv[4], keepSimilarNodesClose=(sys.argv[5] == "True"), circleNodes=top10, cluster=(sys.argv[6] == "True"))
  graphObj.generateGraph()