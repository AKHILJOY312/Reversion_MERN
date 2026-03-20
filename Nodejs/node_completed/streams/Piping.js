const fs = require("fs");

// 1. Create a readable stream from an existing file
const readableStream = fs.createReadStream("input.txt");

// 2. Create a writable stream for the new destination file
const writableStream = fs.createWriteStream("output.txt");

// 3. Pipe the readable stream into the writable stream
readableStream.pipe(writableStream);

// Optional: Handle the 'finish' event to know when copying is done
writableStream.on("finish", () => {
  console.log("File copied successfully using pipe!");
});
