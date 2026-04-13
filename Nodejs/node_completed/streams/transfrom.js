import { Transform } from "stream";
import fs from "fs";

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

fs.createReadStream("data.txt")
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream("upper.txt"));
