const fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("data.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("data.txt.gz"));
