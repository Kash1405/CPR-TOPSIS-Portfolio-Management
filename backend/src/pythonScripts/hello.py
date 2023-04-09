import json
nodes = ['A', 'B', 'C']
edges = [
    {'s': 'A', 't': 'B', 'weight': 10},
    {'s': 'A', 't': 'C', 'weight': 5}
]

output = {
    'nodes': nodes,
    'edges': edges
}
print(json.dumps(output))