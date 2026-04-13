// main.js
import { fork } from "child_process";

console.log("Main process started.");
try {
  const child = fork("./heavy-task.js");

  child.on("message", (m) => console.log(m.result));
  child.on("error", (err) => console.error("Child error:", err));
  child.on("exit", (code) => {
    if (code !== 0) console.error("Child exited with code", code);
  });
} catch (err) {
  console.error("Fork failed:", err);
}
console.log("Main process is non-blocked and continues its work.");

// // main.js
// const { fork } = require("child_process");

// console.log("Main process started.");

// // Fork a new process to handle the heavy calculation.
// const child = fork("./heavy-task.js");

// child.on("message", (message) => {
//   console.log("Received result from child:", message.result);
// });

// console.log("Main process is non-blocked and continues its work.");
