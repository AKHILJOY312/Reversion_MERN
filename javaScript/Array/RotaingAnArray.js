// 1. Modified Two-Pointer Reversal Function
function reverseArray(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

// 2. Optimized In-Place Rotation Function
function rotateArr(arr, d) {
  const n = arr.length;

  // Handle cases where d is greater than array length
  d %= n;
  if (d === 0) return;

  // Step 1: Reverse the first 'd' elements
  reverseArray(arr, 0, d - 1);

  // Step 2: Reverse the remaining 'n - d' elements
  reverseArray(arr, d, n - 1);

  // Step 3: Reverse the entire array
  reverseArray(arr, 0, n - 1);
}

// --- Execution ---
const arr = [1, 2, 3, 4, 5, 6];
const d = 2;

rotateArr(arr, d);

console.log(arr.join(" ")); // Output: 3 4 5 6 1 2
