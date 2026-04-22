function moveZeroes(nums) {
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap nums[i] with nums[lastNonZeroFoundAt]
      [nums[i], nums[lastNonZeroFoundAt]] = [nums[lastNonZeroFoundAt], nums[i]];
      lastNonZeroFoundAt++;
    }
  }
  return nums;
}

// Example
let arr = [0, 1, 0, 3, 12];
console.log("Before:", arr);
moveZeroes(arr);
console.log("After:", arr);
