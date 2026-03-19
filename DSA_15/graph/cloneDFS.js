function cloneDFS() {
  const newGraph = new Graph();
  const visited = new Set();
  const adjList = this.adjList;

  const traverse = (vertex) => {
    if (!vertex || visited.has(vertex)) return;

    visited.add(vertex);

    for (let neighbor of adjList[vertex]) {
      newGraph.addEdge(vertex, neighbor);

      if (!visited.has(neighbor)) {
        traverse(neighbor);
      }
    }
  };

  for (let vertex in adjList) {
    if (!visited.has(vertex)) {
      traverse(vertex);
    }
  }

  return newGraph;
}
