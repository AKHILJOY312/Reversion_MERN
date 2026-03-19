function clone() {
  const newGraph = new Graph();

  for (let vertex in this.adjList) {
    newGraph.addVertex(vertex);

    newGraph.adjList[vertex] = [...this.adjList[vertex]];
  }

  return newGraph;
}
