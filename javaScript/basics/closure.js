function createCounter() {
  let count = 0; // Private variable
  return function () {
    count++; // Accesses outer scope variable
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// count is not accessible here (ReferenceError)
