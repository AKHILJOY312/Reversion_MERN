// Promise Version
import * as fsPromises from "fs/promises";

// Callback Version
import * as fs from "fs";

// Promise-based append
async function appendWithPromise() {
  try {
    await fsPromises.appendFile(
      "promise-data.txt",
      "This is appended text (Promise)\n",
    );
    console.log("Promise: Data appended");
  } catch (err) {
    console.log(err);
  }
}

// Callback-based append
function appendWithCallback() {
  fs.appendFile(
    "callback-data.txt",
    "This is appended text (Callback)\n",
    (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("Callback: Data appended");
    },
  );
}

appendWithPromise();
appendWithCallback();
