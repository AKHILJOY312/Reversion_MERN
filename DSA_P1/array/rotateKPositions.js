function rotateLeft(arr, k) {
  const n = arr.length;
  k = k % n;

  // Helper: reverse part of the array in place
  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  // Step 1: Reverse first k elements
  reverse(0, k - 1);

  // Step 2: Reverse remaining n - k elements
  reverse(k, n - 1);

  // Step 3: Reverse entire array
  reverse(0, n - 1);

  return arr;
}

// Example
const arr = [1, 2, 3, 4, 5, 6, 7];
rotateLeft(arr, 3);
console.log(arr); // ✅ [4, 5, 6, 7, 1, 2, 3]
