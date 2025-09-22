function trap(height) {
  if (!height || height.length <= 2) return 0;

  const n = height.length;
  const leftMax = new Array(n);
  const rightMax = new Array(n);

  // Fill leftMax array
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // Fill rightMax array
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  console.log(leftMax, rightMax);
  // Calculate trapped water
  let water = 0;
  for (let i = 0; i < n; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return water;
}

// Test with the provided example
const height = [0, 1, 0, 2, 1, 0, 1, 3];
console.log(`Water trapped: ${trap(height)}`);
// Output: Water trapped: 6
