//making a matirex
const v = 10;
const arr = Array.from({ length: v }, () => Array(v).fill(0));

function addEdge(mat, i, j) {
  mat[i][j] = 1;
  mat[j][i] = 1;
}

addEdge(arr, 3, 4);
addEdge(arr, 3, 8);
addEdge(arr, 3, 5);
addEdge(arr, 3, 9);
addEdge(arr, 3, 2);
addEdge(arr, 3, 1);

console.log(arr);

function findNeighbor(mat, v) {
  const result = [];
  for (let i = 0; i < mat.length; i++) {
    if (mat[v][i]) {
      result.push(i);
    }
  }
  console.log(result);
}

findNeghours(arr, 3);
