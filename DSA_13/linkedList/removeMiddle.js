class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  isEmpty() {
    if (!this.head) {
      return "Empty list";
    }
    return true;
  }
  //•	Remove the middle element from a linked list
  removeMiddle() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      return this.head;
    }
    let prev = null;
    let middle = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      prev = middle;
      middle = middle.next;
      fast = fast.next.next;
    }
    prev.next = middle.next;
  }

  display() {
    const vals = [];
    let curr = this.head;
    while (curr) {
      vals.push(curr.val);
      curr = curr.next;
    }
    console.log(vals.join(" -> "));
  }
}
const list = new linkedList();
list.insert(1); // List: 1
list.insert(2); // List: 2 -> 1
list.insert(3); // List: 3 -> 2 -> 1
list.insert(1); // List:  1
list.insert(2); // List: 2 -> 1
list.insert(3); // List: 3 -> 2 -> 1
list.insert(1); // List: 1
list.insert(2); // List: 2 -> 1
list.insert(3); // List: 3 -> 2 -> 1

list.display(); // Output: 3 -> 2 -> 1
list.removeMiddle();
list.display(); // Output: 1 -> 2 -> 3 ✅
