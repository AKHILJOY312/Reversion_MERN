class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);
    this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjList[vertex].length) {
      const adjacent = this.adjList[vertex].pop();
      this.removeEdge(vertex, adjacent);
    }
    delete this.adjList[vertex];
  }

  display() {
    for (let vertex in this.adjList) {
      console.log(`${vertex} -> ${this.adjList[vertex].join(", ")}`);
    }
  }
}
