class Graph {
  constructor() {
    this.graph = {};
  }

  addVertix(val) {
    if (!this.graph[val]) this.graph[val] = [];
  }

  addEdge(v1, v2) {
    this.addVertix(v1);
    this.addVertix(v2);

    this.graph[v1].push(v2);
    this.graph[v2].push(v1);
  }

  printCycles(start) {
    const visited = new Set();
    const cycles = [];

    const dfs = (node, parent, path) => {
      visited.add(node);
      path.push(node);

      for (let neighbor of this.graph[node]) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, node, [...path]);
        } else if (neighbor !== parent) {
          cycles.push([...path, neighbor]);
        }
      }
    };

    dfs(start, null, []);

    return cycles;
  }
}

const g = new Graph();

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "A");

console.log(g.printCycles("A"));
console.log(g.graph);
