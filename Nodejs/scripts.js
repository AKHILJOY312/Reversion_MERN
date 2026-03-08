// main.js
const { fork } = require("child_process");

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
