import http from "http";
import fs from "fs";

http
  .createServer((req, res) => {
    const readStream = fs.createReadStream("video.mp4");

    res.writeHead(200, { "Content-Type": "video/mp4" });

    readStream.pipe(res);
  })
  .listen(3000);
