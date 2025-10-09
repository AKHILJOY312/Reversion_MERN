const compose =
  (...fns) =>
  (...args) =>
    fns.reduceRight((acc, fn) => fn(acc), fns.pop()(...args));

const add5 = (x) => x + 5;
const multiplyBy2 = (x) => x * 2;
const square = (x) => x * x;

const composedFunction = compose(square, multiplyBy2, add5);
const result = composedFunction(3); // Evaluates as square(multiplyBy2(add5(3)))
console.log(result); // Output: 64 (3 + 5 = 8; 8 * 2 = 16; 16 * 16 = 256) - Correction: 3 + 5 = 8, 8 * 2 = 16, 16 * 16 = 256
