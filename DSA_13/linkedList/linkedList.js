class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    newNode.next = this.root;
    this.root = newNode;
  }

  printList() {
    if (!this.root) {
      console.log("Please make a list first");
      return;
    }
    const result = [];
    let current = this.root;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result);
    return result;
  }
}

const list = new LinkedList();
list.insert(5);
list.insert(4);
list.insert(7);
list.insert(9);

list.printList();
