// heavy-task.js
// This file is run by the child process.
const calculate = () => {
  let sum = 0;
  for (let i = 0; i < 5e9; i++) {
    sum += i;
  }
  return sum;
};

process.send({ result: calculate() });
