class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null; // Points to the top node
    this.count = 0; // Tracks size for O(1) size() operation
  }

  // Push a value onto the stack
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top; // Point new node to current top
    this.top = newNode; // Update top to new node
    this.count++;
    console.log(`Pushed: ${value}`);
  }

  // Pop the top value off the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow! Cannot pop from empty stack.");
      return null;
    }
    const poppedValue = this.top.value;
    this.top = this.top.next; // Move top to next node
    this.count--;
    console.log(`Popped: ${poppedValue}`);
    return poppedValue;
  }

  // Peek at the top value without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return null;
    }
    return this.top.value;
  }

  // Check if stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Return current size of stack
  size() {
    return this.count;
  }

  // Print stack from top to bottom
  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return;
    }
    let current = this.top;
    let output = "Stack (top → bottom): ";
    while (current !== null) {
      output += current.value;
      if (current.next) output += " → ";
      current = current.next;
    }
    console.log(output);
  }
}

// Create a new stack
const stack = new Stack();

// Test operations
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Stack (top → bottom): 30 → 20 → 10

console.log("Top element:", stack.peek()); // 30
console.log("Size:", stack.size()); // 3

stack.pop(); // Popped: 30
stack.print(); // Stack (top → bottom): 20 → 10

stack.pop(); // Popped: 20
stack.pop(); // Popped: 10
stack.pop(); // Stack Underflow!

console.log("Is empty?", stack.isEmpty()); // true
