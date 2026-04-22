class Graph {
  constructor() {
    this.adjList = {};
  }

  cloneDFS() {
    const newGraph = new Graph();

    for (let v in this.adjList) {
      newGraph.addVertex(v);
    }

    const visited = new Set();
    const dfs = (v) => {
      visited.add(v);
      for (let neighbor of this.adjList[v]) {
        newGraph.addEdge(v, neighbor);
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    for (let v in this.adjList) {
      if (!visited.has(v)) dfs(v);
    }

    return newGraph;
  }
}
