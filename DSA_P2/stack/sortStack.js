class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    return `[${this.items.join(", ")}]`;
  }

  /**
   * Sort this stack using a temporary stack
   * Largest element will be on top after sorting
   */
  sort() {
    const tempStack = new Stack();

    while (!this.isEmpty()) {
      const current = this.pop();
      console.log(current);
      while (!tempStack.isEmpty() && tempStack.peek() > current) {
        this.push(tempStack.pop());
      }

      tempStack.push(current);
      console.log("stack:" + this.items + "  temp:" + tempStack.items);
      console.log("---------------------------");
    }

    // Transfer back so largest is on top
    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop());
    }
  }
}

// Test the Stack class
function testStackClass() {
  console.log("=== Testing Stack Class ===\n");

  const stack = new Stack();
  [34, 3, 31].forEach((item) => stack.push(item));

  console.log(`Original stack: ${stack.print()}`);
  stack.sort();
  console.log(`Sorted stack: ${stack.print()}`);
}

// Uncomment to test the class-based implementation
testStackClass();
