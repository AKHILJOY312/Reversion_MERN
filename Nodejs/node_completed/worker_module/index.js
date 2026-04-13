import { Worker } from "worker_threads";

console.log("Main thread start");

// Create a worker for CPU-heavy task
const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module",
});

worker.on("message", (msg) => {
  console.log("Message from worker:", msg);
});

worker.on("exit", () => {
  console.log("Worker finished");
});

console.log("Main thread continues...");
