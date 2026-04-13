import fs from "fs";

try {
  fs.unlinkSync("data.txt");
  console.log("File deleted");
} catch (err) {
  console.log(err);
}
