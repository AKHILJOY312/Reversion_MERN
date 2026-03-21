function inorderSuccessor(root, key) {
  let succ = null;

  while (root) {
    if (key < root.val) {
      succ = root;
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return succ ? succ.val : null;
}
