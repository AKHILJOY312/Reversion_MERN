const express = require("express");
const { Worker } = require("worker_threads");
const app = express();

// Helper function to manage the worker lifecycle
function runWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js");
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

// Now this route is non-blocking!
app.get("/calculate", async (req, res) => {
  try {
    const result = await runWorker();
    res.send(`Result: ${result}`);
  } catch (err) {
    res.status(500).send("Error in calculation");
  }
});

app.get("/hello", (req, res) => {
  res.send("Hello! I am responsive even during heavy tasks.");
});

app.listen(3000, () => console.log("Server running on port 3000"));

//------------Blocking the second route when Heavy  CPU bounded tasks;----------------

// const express = require("express");
// const app = express();

// function heavyTask() {
//   let sum = 0;
//   for (let i = 0; i < 1e10; i++) {
//     sum += i;
//   }
//   return sum;
// }

// app.get("/calculate", (req, res) => {
//   const result = heavyTask();
//   res.send(result.toString());
// });
// app.get("/hello", (req, res) => {
//   const result = "hello there:";
//   res.send(result);
// });

// app.listen(3000, () => {
//   console.log("app is working");
// });
