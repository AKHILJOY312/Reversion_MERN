// main.js
const { fork } = require("child_process");

console.log("Main process started.");

// Fork a new process to handle the heavy calculation.
const child = fork("./heavy-task.js");

child.on("message", (message) => {
  console.log("Received result from child:", message.result);
});

console.log("Main process is non-blocked and continues its work.");
