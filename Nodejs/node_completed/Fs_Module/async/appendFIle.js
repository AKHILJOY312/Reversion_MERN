import * as fs from "fs/promises";

async function appendExample() {
  try {
    await fs.appendFile("data.txt", "This is appended text\n");
    console.log("Data appended");
  } catch (err) {
    console.log(err);
  }
}

appendExample();
