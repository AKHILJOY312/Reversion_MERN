// 1. The cluster Module
// The cluster module allows you to create multiple worker processes that all share the same server port. It uses the master-worker model. The master process is responsible for creating and managing the worker processes. Each worker is a separate Node.js instance with its own event loop and memory.

// How it works: When a request comes in, the master process can distribute it to one of the available worker processes. This allows multiple requests to be processed simultaneously on different CPU cores.

const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork a worker for each CPU core.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection. In this case, it's an HTTP server.
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Hello from worker ${process.pid}!\n`);
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}
