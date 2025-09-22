// Graph represented as an adjacency list
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

function bfs(startNode) {
  const visited = new Set();
  const queue = [startNode];

  visited.add(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode);

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

console.log("BFS Traversal:");
bfs("A");
// Expected output:
// A
// B
// C
// D
// E
// F
