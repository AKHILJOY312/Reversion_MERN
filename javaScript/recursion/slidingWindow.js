function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  // Initial window sum
  let maxSum = 0;
  for (let i = 0; i < k; i++) maxSum += arr[i];

  let windowSum = maxSum;
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i]; // Slide window
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)
