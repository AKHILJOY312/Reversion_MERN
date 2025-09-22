//	Implement a binary tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class bt {
  constructor() {
    this.root = null;
  }

  add(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      if (!node.left) {
        node.left = newNode;
        return;
      } else {
        queue.push(node.left);
      }

      if (!node.right) {
        node.right = newNode;
        return;
      } else {
        queue.push(node.right);
      }
    }
  }

  inOrder() {
    const result = [];
    function traversal(node) {
      if (!node) return;

      traversal(node.left);
      result.push(node.val);
      traversal(node.right);
    }
    traversal(this.root);
    return result;
  }
  // Optimized height that also checks balance
  height(node = this.root) {
    function check(node) {
      if (!node) return { height: 0, balanced: true };

      const left = check(node.left);
      const right = check(node.right);

      const balanced =
        left.balanced &&
        right.balanced &&
        Math.abs(left.height - right.height) <= 1;

      return {
        height: Math.max(left.height, right.height) + 1,
        balanced,
      };
    }

    return check(node); // returns { height, balanced }
  }

  // Now isBalanced can simply use height()
  isBalanced() {
    return this.height().balanced;
  }
}

const binaryTree = new bt();

binaryTree.add(3);
binaryTree.add(4);
binaryTree.add(6);
binaryTree.add(7);
binaryTree.add(8);
binaryTree.add(1);
binaryTree.add(45);
binaryTree.add(76);
binaryTree.add(60);

console.log(binaryTree.inOrder());
console.log(binaryTree.height().height);
console.log(binaryTree.isBalanced());
