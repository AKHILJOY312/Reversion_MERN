class stack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(val) {
    this.stack1.push(val);
  }
  pop() {
    if (this.isEmpty()) return "stack is empty";
    return this.stack1.pop();
  }
  remove(val) {
    if (this.isEmpty()) {
      return "stack is empty";
    }

    while (this.stack1.length && this.stack1[this.stack1.length - 1] !== val) {
      console.log("hi");
      let temp = this.stack1.pop();
      this.stack2.push(temp);
    }
    this.stack1.pop();
    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
  }
  isEmpty() {
    return this.stack1.length === 0;
  }
}

const stacks = new stack();
stacks.push(1);
stacks.push(2);
stacks.push(3);
stacks.push(4);
stacks.push(5);
stacks.push(6);
console.log(stacks);
stacks.pop();
console.log(stacks);
stacks.remove(4);
console.log(stacks);
