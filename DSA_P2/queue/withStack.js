//Implement Queue Using Stack: Build a queue using two stacks.

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(val) {
    this.stack1.push(val); // O(1) — just push to stack1
  }

  dequeue() {
    // If stack2 is empty, transfer everything from stack1
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        return undefined; // or throw new Error("Queue is empty");
      }
      // Transfer all elements from stack1 to stack2 (reverses order)
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    // Now pop from stack2
    return this.stack2.pop();
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(1);

console.log(queue.dequeue());
console.log(queue);

queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(1);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
