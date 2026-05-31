// Promise Version
import * as fsPromises from "fs/promises";

// Callback Version
import * as fs from "fs";

async function writeWithPromise() {
  try {
    await fsPromises.writeFile("promise-data.txt", "Hello AJ (Promise)\n");
    console.log("Promise: File written successfully");
  } catch (err) {
    console.log(err);
  }
}

function writeWithCallback() {
  fs.writeFile("callback-data.txt", "Hello AJ (Callback)\n", (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Callback: File written successfully");
  });
}

writeWithPromise();
writeWithCallback();
