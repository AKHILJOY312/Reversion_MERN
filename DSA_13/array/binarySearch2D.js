function binarySearch2D(arr, target) {
  if (!arr || arr.length === 0 || arr[0].length === 0) return -1;

  const rows = arr.length;
  const cols = arr[0].length;
  let l = 0;
  let r = rows * cols - 1; // ✅ Total elements - 1

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    // Convert 1D index to 2D coordinates
    const row = Math.floor(mid / cols);
    const col = mid % cols;

    const midValue = arr[row][col]; // ✅ Get actual element

    if (midValue === target) {
      return [row, col]; // ✅ Return position as [row, col]
    } else if (midValue < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1; // Not found
}

const arr = [
  [1, 2, 3],
  [5, 6, 7],
  [8, 9, 10],
];
console.log(binarySearch2D(arr, 3)); // ✅ Output: [0, 2]
console.log(binarySearch2D(arr, 6)); // ✅ Output: [1, 1]
console.log(binarySearch2D(arr, 4)); // ✅ Output: -1
