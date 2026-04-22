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

  printCycles(start) {
    const visited = new Set();

    const dfs = (node, parent, path) => {
      visited.add(node);
      path.push(node);

      for (let neighbor of this.graph[node]) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, node, path);
        } else if (neighbor !== parent) {
          // cycle found
          const idx = path.indexOf(neighbor);
          if (idx !== -1) {
            console.log(path.slice(idx));
          }
        }
      }

      path.pop();
    };

    dfs(start, null, []);
  }
}
const g = new Graph();

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "A"); // cycle 1

g.addEdge("A", "D");
g.addEdge("C", "D"); // cycle 2

g.addEdge("D", "E"); // no cycle here

g.printCycles("A");
