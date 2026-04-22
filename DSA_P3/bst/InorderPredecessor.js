function inorderPredecessor(root, key) {
  let pred = null;

  while (root) {
    if (key > root.val) {
      pred = root;
      root = root.right;
    } else {
      root = root.left;
    }
  }

  return pred ? pred.val : null;
}
