function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();

  // initialize distances
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    // find unvisited node with smallest distance
    let current = null;
    for (let node in distances) {
      if (!visited.has(node)) {
        if (current === null || distances[node] < distances[current]) {
          current = node;
        }
      }
    }

    // update distances of neighbors
    for (let neighbor in graph[current]) {
      let newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
      }
    }

    visited.add(current);
  }

  return distances;
}

const graph = {
  A: { B: 1, D: 4 },
  B: { A: 1, C: 2, E: 3 },
  C: { B: 2 },
  D: { A: 4, E: 1 },
  E: { B: 3, D: 1 },
};

console.log(dijkstra(graph, "A"));
