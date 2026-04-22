function pathSum(root, targetSum) {
  const result = [];

  function dfs(node, currentSum, path) {
    if (!node) return;

    currentSum += node.val;
    path.push(node.val);

    // Check if it's a leaf node and sum matches
    if (!node.left && !node.right && currentSum === targetSum) {
      result.push([...path]); // make a copy
    }

    dfs(node.left, currentSum, path);
    dfs(node.right, currentSum, path);

    path.pop(); // backtrack
  }

  dfs(root, 0, []);
  return result;
}
