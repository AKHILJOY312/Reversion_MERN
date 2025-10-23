function* randomUniqueNumbers(range) {
  yield Math.floor(Math.random() * range);
}

// 🚀 Usage Example
const gen = randomUniqueNumbers(10);

console.log(gen.next().value); // e.g. 7
console.log(gen.next().value); // e.g. 2
console.log(gen.next().value); // e.g. 10
// ... until all 10 numbers are yielded

// Or consume all at once:
for (const num of randomUniqueNumbers(1, 5)) {
  console.log(num);
}
// Output (random order, no repeats): e.g. 3, 1, 5, 2, 4
