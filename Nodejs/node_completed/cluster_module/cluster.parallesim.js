const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork()); // create workers
} else {
  http
    .createServer((req, res) => {
      res.end(`Worker ${process.pid}`);
    })
    .listen(8000);
}
