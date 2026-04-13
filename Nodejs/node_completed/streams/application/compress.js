import fs from "fs";
import zlib from "zlib";

fs.createReadStream("data.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("data.txt.gz"));
