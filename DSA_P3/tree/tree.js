//make a bt
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
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    //using level order
    const queue = [this.root];

    while (queue.length) {
      const current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        return;
      } else if (!current.right) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.left, current.right);
      }
    }
  }

  inOrder(root = this.root) {
    if (!root) return;
    this.inOrder(root.left);
    console.log(root.val);
    this.inOrder(root.right);
  }
  preOrder(root = this.root) {
    if (!root) return;
    console.log(root.val);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  postOrder(root = this.root) {
    if (!root) return;
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.val);
  }
}

//make a binary tree instance

const bt = new BinaryTree();
bt.insert(3);
bt.insert(6);
bt.insert(8);
bt.insert(3);
bt.insert(6);
bt.insert(8);
bt.insert(3);
bt.insert(6);
bt.insert(8);
bt.inOrder();
