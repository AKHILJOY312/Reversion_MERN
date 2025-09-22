class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

function reverseStringUsingStack(str) {
  const stack = new Stack();

  // Push all characters onto stack
  for (let char of str) {
    stack.push(char);
  }

  let reversed = "";

  // Pop all characters off stack (LIFO = reversed order)
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}

// Test
console.log(reverseStringUsingStack("hello")); // "olleh"
console.log(reverseStringUsingStack("JavaScript")); // "tpircSavaJ"
console.log(reverseStringUsingStack("")); // ""
