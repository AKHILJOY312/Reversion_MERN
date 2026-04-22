//fibbi with memo

function fibonacci(n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  let temp = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = temp;

  return temp;
}
console.log(fibonacci(10));
