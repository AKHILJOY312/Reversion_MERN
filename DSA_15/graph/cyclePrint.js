class Graph {
  constructor() {
    this.graph = new Map();
  }

  addVertex(v) {
    if (!this.graph.has(v)) {
      this.graph.set(v, []);
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.graph.get(v1).push(v2);
    this.graph.get(v2).push(v1);
  }

  printCycles(start) {
    const visited = new Set();
    const stack = new Set();
    const cycles = [];

    const dfs = (node, parent, path) => {
      visited.add(node);
      stack.add(node);
      path.push(node);

      for (let neighbor of this.graph.get(node)) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, node, path);
        } else if (neighbor !== parent && stack.has(neighbor)) {
          const cycleStart = path.indexOf(neighbor);
          const cycle = path.slice(cycleStart);
          cycle.push(neighbor);
          cycles.push(cycle);
        }
      }

      stack.delete(node);
      path.pop();
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
