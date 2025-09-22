//3.	Queue Using Linked List: Implement a queue using a linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return;
    }
    this.last.next = newNode;
    this.last = newNode;
  }

  dequeue() {
    if (!this.first) {
      return "queue is empty";
    }

    const val = this.first;
    this.first = this.first.next;
    if (!this.first) {
      this.last = null;
    }
    return val.val;
  }
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(9);
queue.enqueue(4);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
