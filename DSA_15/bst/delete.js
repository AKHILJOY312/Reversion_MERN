class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function deleteNode(root, key) {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // case 1 & 2
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // case 3
    let successor = root.right;
    while (successor.left) {
      successor = successor.left;
    }

    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
  }

  return root;
}
