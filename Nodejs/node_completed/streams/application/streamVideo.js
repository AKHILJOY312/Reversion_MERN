const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const readStream = fs.createReadStream("video.mp4");

    res.writeHead(200, { "Content-Type": "video/mp4" });

    readStream.pipe(res);
  })
  .listen(3000);
