import fs from "fs";
import * as fsPromise from "fs/promises";

// callback approach
fs.readFile("./text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log(data);
});

//modern promise approach
async function read() {
  const data = await fsPromise.readFile("./text.txt", "utf8");
  console.log(data);
}

read();
