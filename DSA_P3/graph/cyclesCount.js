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

  countCycles() {
    const visited = new Set();
    let cycleCount = 0;

    const dfs = (node, parent) => {
      visited.add(node);

      for (let neighbor of this.graph[node]) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, node);
        } else if (neighbor !== parent) {
          cycleCount++;
        }
      }
    };

    for (let node in this.graph) {
      if (!visited.has(node)) {
        dfs(node, null);
      }
    }

    return cycleCount / 2;
  }
}

const g = new Graph();

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "A");

g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("F", "D");

console.log(g.countCycles());
