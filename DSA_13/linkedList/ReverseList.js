//•	Reverse LL

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

  reverseList() {
    if (!this.head) {
      return "List is empty";
    }
    let prev = null;
    let curr = this.head;
    while (curr) {
      const temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
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
list.insert(1); // List: 1
list.insert(2); // List: 2 -> 1
list.insert(3); // List: 3 -> 2 -> 1
list.insert(1); // List: 1
list.insert(2); // List: 2 -> 1
list.insert(3); // List: 3 -> 2 -> 1

list.display(); // Output: 3 -> 2 -> 1
list.reverseList();
list.display(); // Output: 1 -> 2 -> 3 ✅
