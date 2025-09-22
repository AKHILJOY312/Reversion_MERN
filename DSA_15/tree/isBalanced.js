function isBalanced(node) {
  if (!node) return 0;
  const leftHeight = height(node.left);
  if (leftHeight === -1) return -1;
  const rightHeight = height(node.right);
  if (rightHeight === -1) return -1;

  return Math.abs(leftHeight - rightHeight) > 1;
}

function height(node) {
  if (!node) return -1;
  return Math.max(height(node.left), height(node.right)) + 1;
}
