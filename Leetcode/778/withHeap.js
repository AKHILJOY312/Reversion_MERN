class MinHeap {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
    this._bubbleUp(this.data.length - 1);
  }

  pop() {
    if (this.data.length === 0) return null;
    const min = this.data[0];
    const end = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = end;
      this._sinkDown(0);
    }
    return min;
  }

  _bubbleUp(index) {
    const element = this.data[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.data[parentIndex];
      if (element[0] >= parent[0]) break;
      this.data[parentIndex] = element;
      this.data[index] = parent;
      index = parentIndex;
    }
  }

  _sinkDown(index) {
    const length = this.data.length;
    const element = this.data[index];
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let swap = null;

      if (left < length && this.data[left][0] < element[0]) swap = left;
      if (
        right < length &&
        this.data[right][0] < (swap === null ? element[0] : this.data[left][0])
      )
        swap = right;
      if (swap === null) break;
      [this.data[index], this.data[swap]] = [this.data[swap], this.data[index]];
      index = swap;
    }
  }

  size() {
    return this.data.length;
  }
}

var swimInWater = function (grid) {
  const n = grid.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const heap = new MinHeap();

  heap.push([grid[0][0], 0, 0]);
  visited[0][0] = true;
  let maxTime = 0;

  while (heap.size() > 0) {
    const [time, r, c] = heap.pop();
    maxTime = Math.max(maxTime, time);

    if (r === n - 1 && c === n - 1) return maxTime;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < n && nc < n && !visited[nr][nc]) {
        visited[nr][nc] = true;
        heap.push([grid[nr][nc], nr, nc]);
      }
    }
  }

  return maxTime;
};
