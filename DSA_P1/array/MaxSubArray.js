// 1. Array – Maximum Subarray Sum (Kadane’s Algorithm)

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example: nums = [-2,1,-3,4,-1,2,1,-5,4] → Output = 6 (subarray [4,-1,2,1]).

// Follow-up: Modify to return the subarray itself.

function maxSubarray(nums) {
  if (!nums && nums.length == 0) {
    return 0;
  }

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
} // Test with the provided example
const nums = [-2, 100, 1, -3, 4, -1, 2, 1, -5, 4];
// const [sumResult, subarrayResult] = maxSubarray(nums);
// console.log(`Maximum sum: ${sumResult}`);
// console.log(`Subarray: [${subarrayResult.join(', ')}]`);
// // Output: Maximum sum: 6, Subarray: [4, -1, 2, 1]

// Test the basic version
console.log(`Maximum sum only: ${maxSubarray(nums)}`);
// Output: Maximum sum only: 6
