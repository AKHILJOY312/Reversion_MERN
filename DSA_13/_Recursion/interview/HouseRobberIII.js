function rob(root) {
  function dfs(node) {
    if (!node) return [0, 0]; // [rob this node, don't rob this node]

    const left = dfs(node.left);
    const right = dfs(node.right);

    // If we rob this node, we can't rob children
    const rob = node.val + left[1] + right[1];
    // If we don't rob this node, we can choose to rob or not rob children
    const notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [rob, notRob];
  }

  const [robRoot, notRobRoot] = dfs(root);
  return Math.max(robRoot, notRobRoot);
}
