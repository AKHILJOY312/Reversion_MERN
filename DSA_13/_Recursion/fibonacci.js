//fibonacci

function fibonacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFib(n) {
  const result = [];
  for (let i = 0; i < n + 1; i++) {
    result.push(fibonacci(i));
  }
  console.log(result);
}

printFib(5);
