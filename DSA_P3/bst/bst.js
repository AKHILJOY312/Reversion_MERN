class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //  Insert (iterative)
  insert(val) {
    const newNode = new TreeNode(val);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        // duplicate — ignore (standard BST behavior)
        return;
      }
    }
  }

  //  Search (iterative)
  search(val) {
    let current = this.root;
    while (current !== null) {
      if (val === current.val) return true;
      current = val < current.val ? current.left : current.right;
    }
    return false;
  }

  //  Delete (iterative — more complex, but avoids recursion)
  delete(val) {
    let current = this.root;
    let parent = null;
    let isLeftChild = true;

    //  Step 1: Find the node and its parent
    while (current !== null && current.val !== val) {
      parent = current;
      if (val < current.val) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
    }

    if (current === null) return; // not found

    //  Case 1: Node has no children (leaf)
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    //  Case 2: Node has one child
    else if (current.right === null) {
      // only left child
      if (current === this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (current.left === null) {
      // only right child
      if (current === this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    }
    // Case 3: Node has two children
    else {
      // Find in-order successor (min in right subtree)
      let successor = current.right;
      let successorParent = current;

      while (successor.left !== null) {
        successorParent = successor;
        successor = successor.left;
      }

      // Copy successor’s value into current node
      current.val = successor.val;

      // Now delete the successor (which has at most one child — right)
      if (successor === successorParent.left) {
        successorParent.left = successor.right; // successor has no left by definition
      } else {
        // happens when successor is immediate right child (no left subtree)
        successorParent.right = successor.right;
      }
    }
  }

  //  In-order traversal (iterative — using stack)
  inOrder() {
    const result = [];
    const stack = [];
    let current = this.root;

    while (stack.length > 0 || current !== null) {
      // Go left as far as possible
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }
      // Process node
      current = stack.pop();
      result.push(current.val);
      // Move to right subtree
      current = current.right;
    }

    return result;
  }

  //  Min (iterative)
  min() {
    let current = this.root;
    if (!current) return null;
    while (current.left !== null) current = current.left;
    return current.val;
  }

  //  Max (iterative)
  max() {
    let current = this.root;
    if (!current) return null;
    while (current.right !== null) current = current.right;
    return current.val;
  }
}
