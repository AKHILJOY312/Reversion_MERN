import fs from "fs";

const readStream = fs.createReadStream("data.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log("Chunk received:");
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("File reading completed");
});

readStream.on("error", (err) => {
  console.log(err);
});
