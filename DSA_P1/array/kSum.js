function kSum(nums, target, k, start = 0) {
  const res = [];
  const n = nums.length;

  // Base case: 2Sum with two pointers
  if (k === 2) {
    let left = start,
      right = n - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        res.push([nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // skip dup
        while (left < right && nums[right] === nums[right - 1]) right--; // skip dup
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return res;
  }

  // Recursive case: reduce kSum → (k-1)Sum
  for (let i = start; i < n - k + 1; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue; // skip duplicates
    const subsets = kSum(nums, target - nums[i], k - 1, i + 1);
    for (const subset of subsets) {
      res.push([nums[i], ...subset]);
    }
  }

  return res;
}

// Wrapper for 3Sum
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  return kSum(nums, 0, 3);
}

// Wrapper for 4Sum
function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  return kSum(nums, target, 4);
}

// Example
console.log("3Sum:", threeSum([-1, 0, 1, 2, -1, -4]));
console.log("4Sum:", fourSum([1, 0, -1, 0, -2, 2], 0));
