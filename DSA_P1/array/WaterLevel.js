function trap(height) {
  if (!height || height.length <= 2) {
    return 0; // Can't trap water with 2 or fewer bars
  }

  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let water = 0;

  while (left < right) {
    if (leftMax <= rightMax) {
      // Left side is the limiting factor
      left++;
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left]; // Add trapped water at current position
    } else {
      // Right side is the limiting factor
      right--;
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right]; // Add trapped water at current position
    }
  }

  return water;
}

// Test with the provided example
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(`Water trapped: ${trap(height)}`);
// Output: Water trapped: 6
