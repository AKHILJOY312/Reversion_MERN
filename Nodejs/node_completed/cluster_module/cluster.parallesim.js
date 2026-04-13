import cluster from "cluster";
import http from "http";
import os from "os";

if (cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork()); // create workers
} else {
  http
    .createServer((req, res) => {
      res.end(`Worker ${process.pid}`);
    })
    .listen(8000);
}
