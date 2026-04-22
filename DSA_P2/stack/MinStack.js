class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    const min = this.stack.length === 0 ? val : Math.min(val, this.getMin());

    this.stack.push({ val, min });
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1].val;
  }

  getMin() {
    return this.stack[this.stack.length - 1].min;
  }
}

// Example
const minStack = new MinStack();

minStack.push(5);
minStack.push(2);
minStack.push(10);

console.log(minStack.getMin()); // 2
minStack.pop();
console.log(minStack.getMin()); // 2
