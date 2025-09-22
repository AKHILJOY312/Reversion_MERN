const { Worker } = require("worker_threads");

console.log("Main thread start");

// Create a worker for CPU-heavy task
const worker = new Worker("./worker.js");

worker.on("message", (msg) => {
  console.log("Message from worker:", msg);
});

worker.on("exit", () => {
  console.log("Worker finished");
});

console.log("Main thread continues...");
