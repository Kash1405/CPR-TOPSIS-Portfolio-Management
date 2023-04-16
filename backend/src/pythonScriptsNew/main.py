from CPR_TOPSIS import CPR_TOPSIS
from StockGraph import StockGraph

def selectCorrelationMatrix(selectStocks=["all"], nMonths=1, correlationType="dailyPriceReturn"):
  import pandas as pd
  import io
  import numpy as np
  full_df = pd.read_csv(f'./data/{nMonths}-{correlationType}.csv', index_col=0)
  full_df = pd.DataFrame(full_df, dtype=np.float64)
  if selectStocks[0] == "all":
    return full_df
  else:
    subset = full_df[selectStocks]
    subset = subset.T
    subset = subset[selectStocks]
    return subset

if __name__ == "__main__":
    d = {"dailyClosePrice": "closePrice", "dailyVolume": "volume", "dailyPriceReturn": "priceReturn"}
    for i in [3,6]:
        for c in ["dailyClosePrice", "dailyVolume", "dailyPriceReturn"]:
            corrMat = selectCorrelationMatrix(nMonths=i, correlationType=c)
            stockNames = list(corrMat.index)

            # CPR-TOPSIS
            # cpr = CPR_TOPSIS(corrMat)
            # rankings = cpr.getRankings()

            # # Graph visualization
            # top10 = [stockNames[i] for i in range(len(stockNames)) if rankings[i] <=10]
            
            graphObj = StockGraph(corrMat, fileName=f"{i}Month_{d[c]}_excludeNone_circleNone_similarNodesClose_Cluster.png")
            graphObj.generateGraph()