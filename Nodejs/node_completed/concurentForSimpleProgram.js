console.log("Start");

setTimeout(() => {
  console.log("Task 1 (2 sec delay)");
}, 2000);

setTimeout(() => {
  console.log("Task 2 (0 sec delay)");
}, 0);

console.log("End");
