const fs = require("fs/promises");

async function writeExample() {
  try {
    await fs.writeFile("data.txt", "Hello AJ\n");
    console.log("File written successfully");
  } catch (err) {
    console.log(err);
  }
}

writeExample();
