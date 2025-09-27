function rotate90(matrix) {
  const n = matrix.length;

  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

// Example
let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("90° Clockwise:");
console.log(rotate90(mat));
