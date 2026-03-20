const fs = require("fs");
const zlib = require("zlib"); // Built-in compression module

// 1. Source (Readable)
const source = fs.createReadStream("input.txt");

// 2. Destination (Writable)
const destination = fs.createWriteStream("input.txt.gz");

// 3. Transform Stream (Compressing)
const gzip = zlib.createGzip();

// 4. Chain them together: Source -> Compress -> Destination
source
  .pipe(gzip)
  .pipe(destination)
  .on("finish", () => {
    console.log("File compressed successfully using chaining!");
  });
