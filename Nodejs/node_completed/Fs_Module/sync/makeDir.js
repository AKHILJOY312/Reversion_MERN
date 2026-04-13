import fs from "fs";

try {
  fs.mkdirSync("logs");
  console.log("Folder created");
} catch (err) {
  console.log(err);
}
