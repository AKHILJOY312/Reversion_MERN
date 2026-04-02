const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  // Main thread creates a worker.
  const worker = new Worker(__filename);
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
