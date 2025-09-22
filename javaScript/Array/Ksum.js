function kSum(arr, target, k) {
  arr.sort((a, b) => a - b); // sort for two-pointer
  return kSumHelper(arr, target, k, 0);
}

function kSumHelper(arr, target, k, start) {
  const result = [];

  // Base case: 2-sum
  if (k === 2) {
    let left = start,
      right = arr.length - 1;
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        result.push([arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) left++;
        while (left < right && arr[right] === arr[right + 1]) right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return result;
  }

  // Recursive case: reduce k
  for (let i = start; i < arr.length - (k - 1); i++) {
    if (i > start && arr[i] === arr[i - 1]) continue; // skip duplicates
    const subsets = kSumHelper(arr, target - arr[i], k - 1, i + 1);
    for (const subset of subsets) {
      result.push([arr[i], ...subset]);
    }
  }

  return result;
}

// Example: 4-Sum
console.log(kSum([1, 0, -1, 0, -2, 2], 0, 4));

// Example: 3-Sum
console.log(kSum([-1, 0, 1, 2, -1, -4], 0, 3));
