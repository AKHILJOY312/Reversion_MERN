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
}

function isPalindromeUsingStack(str) {
  // Optional: Normalize — remove non-alphanumeric, convert to lowercase
  const normalized = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const stack = new Stack();

  // Push all characters onto stack
  for (let char of normalized) {
    stack.push(char);
  }

  let reversed = "";

  // Pop all characters to build reversed string
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  // Compare original normalized string with reversed
  return normalized === reversed;
}

// Test cases
console.log(isPalindromeUsingStack("madam"));
// true

console.log(isPalindromeUsingStack("racecar"));
// true

console.log(isPalindromeUsingStack("hello"));
// false

console.log(isPalindromeUsingStack("A man a plan a canal Panama"));
// true

console.log(isPalindromeUsingStack("Was it a car or a cat I saw?"));
// true

console.log(isPalindromeUsingStack("No 'x' in Nixon"));
// true

console.log(isPalindromeUsingStack(""));
// true (empty string is palindrome)
