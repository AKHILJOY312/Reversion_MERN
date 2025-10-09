var swimInWater = function (grid) {
  const n = grid.length;

  // ---- Helper function to check if we can reach end with given time ----
  function canReach(mid) {
    if (grid[0][0] > mid) return false; // can't even start

    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    // BFS traversal
    while (queue.length > 0) {
      const [r, c] = queue.shift();

      // reached bottom-right
      if (r === n - 1 && c === n - 1) return true;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < n &&
          nc < n &&
          !visited[nr][nc] &&
          grid[nr][nc] <= mid
        ) {
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }

    return false;
  }

  // ---- Binary Search over possible times ----
  let low = grid[0][0];
  let high = n * n - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (canReach(mid)) {
      high = mid; // can reach → try smaller time
    } else {
      low = mid + 1; // cannot reach → need more time
    }
  }

  return low; // minimum time needed
};
