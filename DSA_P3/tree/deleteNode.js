class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  delete(val) {
    if (!this.root) return;

    let queue = [this.root];
    let target = null;
    let last = null;
    let parentOfLast = null;

    while (queue.length) {
      let node = queue.shift();

      if (node.val === val) {
        target = node;
      }

      if (node.left) {
        parentOfLast = node;
        queue.push(node.left);
      }

      if (node.right) {
        parentOfLast = node;
        queue.push(node.right);
      }

      last = node;
    }

    if (target) {
      target.val = last.val;

      if (parentOfLast.right === last) {
        parentOfLast.right = null;
      } else {
        parentOfLast.left = null;
      }
    }
  }
}
