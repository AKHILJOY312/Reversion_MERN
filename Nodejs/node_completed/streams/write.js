import fs from "fs";

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello AJ\n");
writeStream.write("Learning Streams\n");
writeStream.write("Node.js is powerful\n");

writeStream.end();

writeStream.on("finish", () => {
  console.log("Writing completed");
});
