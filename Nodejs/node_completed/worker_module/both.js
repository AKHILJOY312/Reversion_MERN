import { Worker, isMainThread, parentPort } from "worker_threads";

if (isMainThread) {
  // Main thread creates a worker.
  const worker = new Worker(new URL(import.meta.url), { type: "module" });
  worker.on("message", (message) => {
    console.log("Message from worker:", message);
  });
  worker.postMessage("Hello from main thread");
} else {
  // Worker thread.
  parentPort.on("message", (message) => {
    parentPort.postMessage(`Received: ${message}`);
  });
}
