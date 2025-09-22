//•	Circular linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head = newNode;
    }
  }
  deleteTail() {
    if (!this.tail) {
      return "Empty List";
    } else if (this.tail === this.head) {
      let curr = this.head;
      this.head = this.tail = null;
      return curr.val;
    } else {
      let curr = this.head;
      let prev = null;
      while (curr !== this.tail) {
        prev = curr;
        curr = curr.next;
      }

      prev.next = this.head;
      this.tail = prev;
      return curr.val;
    }
  }
}
