//inordertrvesal

class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

function Succor(root, target) {
  let post = null;
  let found = false;
  function inOrder(root) {
    if (!root) return null;
    inOrder(root.left);
    if (found && post === null) {
      post = root.data;
      return;
    }

    if (root.data === target) {
      found = true;
    }
    inOrder(root.right);
  }
  inOrder(root);

  return post;
}
console.log(Succor(root, 22)); //next node in ascending order
