class Graph {
  constructor() {
    this.graph = {};
  }

  addVertex(v) {
    if (!this.graph[v]) this.graph[v] = [];
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.graph[v1].push(v2);
    this.graph[v2].push(v1);
  }

  hasCycle() {
    const visited = new Set();

    const dfs = (node, parent) => {
      visited.add(node);

      for (let neighbor of this.graph[node]) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, node)) return true;
        } else if (neighbor !== parent) {
          return true;
        }
      }

      return false;
    };

    for (let node in this.graph) {
      if (!visited.has(node)) {
        if (dfs(node, null)) return true;
      }
    }

    return false;
  }
}

const g = new Graph();

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "A");

console.log(g.hasCycle());
