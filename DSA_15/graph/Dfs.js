const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

const visited = new Set();

function dfs(node) {
  console.log(node);
  visited.add(node);

  for (let neg of graph[node]) {
    if (!visited.has(neg)) {
      dfs(neg);
    }
  }
}

console.log("DFS Traversal:");
dfs("A");
