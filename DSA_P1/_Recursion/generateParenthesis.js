function generateParenthesis(n) {
  const result = [];

  function backtrack(current, open, close) {
    // If length = 2 * n, it's a valid sequence
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // Add '(' if possible
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // Add ')' if valid
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}

// Example
console.log(generateParenthesis(1));
// ["((()))","(()())","(())()","()(())","()()()"]
