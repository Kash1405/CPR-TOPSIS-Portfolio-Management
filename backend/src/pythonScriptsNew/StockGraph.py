import numpy as np
from scipy.cluster.hierarchy import linkage, fcluster
from collections import defaultdict
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
from matplotlib.colors import ListedColormap
from netgraph import Graph
class StockGraph():

  def __init__(self, correlationTable, fileName, filterCorrMatValuesWhichAre="", circleNodes=[], keepSimilarNodesClose=True, cluster=True):
    self.correlationTable = correlationTable
    self.fileName = fileName
    self.filterCorrMatValuesWhichAre = filterCorrMatValuesWhichAre
    self.circleNodes =circleNodes
    self.keepSimilarNodesClose = keepSimilarNodesClose
    self.cluster = cluster
    self.getAdjacencyMatrix()
    self.modifyNegativeValuesAdjacencyMatrix()
    self.clusterNodes()
    self.generateClusterColors()
  
  def getAdjacencyMatrix(self):
    if self.filterCorrMatValuesWhichAre == "":
      t_pos = 1 / self.correlationTable[self.correlationTable >= 0.5] 
      t_neg = 1 / self.correlationTable[self.correlationTable <= -0.5]
      t_pos = t_pos.fillna(0)
      t_neg = t_neg.fillna(0)
      adj = t_pos + t_neg
      for i in adj.index:
        adj.at[i,i] = 0
      adj = adj.fillna(0)
      self.adj = adj
    
    elif self.filterCorrMatValuesWhichAre == "-":
      adj = 1 / self.correlationTable[self.correlationTable >= 0.5]
      for i in adj.index:
        adj.at[i,i] = 0
      adj = adj.fillna(0)
      self.adj = adj
    
    else:
      adj = 1 / self.correlationTable[self.correlationTable <= -0.5]
      for i in adj.index:
        adj.at[i,i] = 0
      adj = adj.fillna(0)
      self.adj = adj
  
  def modifyNegativeValuesAdjacencyMatrix(self):
    if self.keepSimilarNodesClose:
      for i in self.adj.index:
        for j in self.adj.index:
          self.adj.at[i,j] = 2.1 - self.adj.at[i,j] if self.adj.at[i,j] < 0 else self.adj.at[i,j]
    else:
      self.adj = self.adj - self.adj.min().min()
  
  def clusterNodes(self):
    if not self.cluster:
      self.clusterIdxLabel = {i:1 for i in range(len(self.adj.index))}
      return
    
    distMatrix1D = defaultdict(int)
    m = len(self.adj)
    count = 0
    for i in range(m):
      for j in range(i+1,m):
        count += 1
        d = self.adj.iloc[i,j]
        d = 2.1 if np.isnan(d) else d
        distMatrix1D[m * i + j - ((i+2) * (i+1)) // 2] = d

    sortedKeys = sorted(distMatrix1D.keys())
    condensedDistanceMatrix = []
    for key in sortedKeys:
      condensedDistanceMatrix.append(distMatrix1D[key])

    linkageMatrix = linkage(condensedDistanceMatrix, method="ward")
    clusters = fcluster(linkageMatrix, criterion='maxclust', t=10)
    stockNames = list(self.adj.index)
    clusterLabel = {}
    clusterIdxLabel = {}
    for i,cluster in enumerate(clusters):
      clusterLabel[stockNames[i]] = cluster
      clusterIdxLabel[i] = cluster
    self.clusterIdxLabel = clusterIdxLabel
  
  def generateClusterColors(self):
    if not self.cluster:
      nodeColor = {i:[1,1,1,1] for i in range(len(self.correlationTable.index))}
      self.nodeColor = nodeColor
      return
    
    clusterColor = {}
    clusterColor[0] = (251, 248, 204)
    clusterColor[1] = (253, 228, 207)
    clusterColor[2] = (255, 207, 210)
    clusterColor[3] = (241, 192, 232)
    clusterColor[4] = (207, 186, 240)
    clusterColor[5] = (163, 196, 243)
    clusterColor[6] = (144, 219, 244)
    clusterColor[7] = (142, 236, 245)
    clusterColor[8] = (152, 245, 225)
    clusterColor[9] = (185, 251, 192)

    nodeColor = {}
    for k,v in self.clusterIdxLabel.items():
      nodeColor[k] = [val/255 for val in clusterColor[v-1]] + [1]
    
    self.nodeColor = nodeColor
  
  def generateGraph(self):
    # Define the colormap as a list of two colors
    cmap_colors = ['white', 'black']
    # Create the colormap object with two colors
    cmap = ListedColormap(cmap_colors)

    vm = self.adj.fillna(0)
    columns = vm.columns
    nodeMapping = {i:columns[i] for i in range(len(columns))}
    figure(figsize=(40,30), dpi=100)
    node_edge_width = {}
    stockNames = list(self.adj.index)
    for i in range(len(stockNames)):
      if stockNames[i] in self.circleNodes:
        node_edge_width[i] = 20
      else:
        node_edge_width[i] = 5
    Graph(vm.to_numpy(), node_labels=nodeMapping,  node_size=200.0, scale=(150.,150.), node_layout='community', node_layout_kwargs={'node_to_community':self.clusterIdxLabel}, edge_cmap=cmap, node_color=self.nodeColor, node_edge_width=node_edge_width)
    plt.savefig(self.fileName)
    

  

