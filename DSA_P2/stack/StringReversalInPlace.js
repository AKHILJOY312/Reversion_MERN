function reverseStringInPlaceUsingStack(str) {
  // Convert string to array of characters (to simulate mutability)
  let charArray = str.split("");
  const stack = new Stack();

  // Push all characters onto stack
  for (let char of charArray) {
    stack.push(char);
  }

  // Pop back into array from start to end
  for (let i = 0; i < charArray.length; i++) {
    charArray[i] = stack.pop();
  }

  // Return as string (since we can't mutate original string)
  return charArray.join("");
}

// Test
console.log(reverseStringInPlaceUsingStack("world")); // "dlrow"
console.log(reverseStringInPlaceUsingStack("Stack")); // "kcatS"
console.log(reverseStringInPlaceUsingStack("a")); // "a"
