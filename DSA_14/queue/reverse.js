//Reverse a Queue: Implement queue reversal.
class Queue {
  constructor() {
    this.q = [];
  }

  enqueue(val) {
    this.q.push(val);
  }
  reverse() {
    if (!this.q.length) return null;
    const stack = [];
    while (this.q.length) {
      stack.push(this.q.shift());
    }
    while (stack.length) {
      this.q.push(stack.pop());
    }
  }

  // reverse() {
  //   if (this.isEmpty()) return this;

  //   // Instead of using shift() (which is O(n)), just reverse the array
  //   this.q.reverse(); // ✅ O(n) total, not O(n²)
  //   return this;
  // }
}
const queue = new Queue();
queue.q = [3, 4, 5, 7, 8, 1, 3, 9];
queue.enqueue(4);
queue.reverse();
queue.enqueue(4);
queue.reverse();
console.log(queue);
