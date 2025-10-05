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

// function Succor(root, target) {
//   let post = 1;
//   const result = [];
//   function inorder(root) {
//     if (!root) return null;
//     inorder(root.left);
//     result.push(root.data);
//     inorder(root.right);
//   }
//   inorder(root);

//   // //findling the next element
//   // for (let i = 0; i < result.length; i++) {
//   //   if (target === result[i]) {
//   //     return result[i + 1];
//   //   }
//   // }
//   return null;
// }

function Succor(root, target) {
  let post = null;
  let found = false;
  function inorder(root) {
    if (!root) return null;
    inorder(root.left);
    if (found && post === null) {
      post = root.data;
      return;
    }

    if (root.data === target) {
      found = true;
    }
    inorder(root.right);
  }
  inorder(root);

  return post;
}
console.log(Succor(root, 22));
