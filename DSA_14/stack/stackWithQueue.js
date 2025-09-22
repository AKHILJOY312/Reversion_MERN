//12.	Stack Using Queue: Implement a stack using two queues.

class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(val) {
    if (this.q1.length == 0) {
      this.q1.push(val);
      return;
    }
    this.q2.push(val);
    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }
    this.q1 = [...this.q2];
    this.q2 = [];
  }

  pop() {
    if (this.q1.length === 0) return "empty stack";
    return this.q1.shift();
  }
}

const q = new Stack();
q.push(6);
q.push(5);
q.push(4);
q.push(3);
q.push(2);
q.push(1);

console.log(q);
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
