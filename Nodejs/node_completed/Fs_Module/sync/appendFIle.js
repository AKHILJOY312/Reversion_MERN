import fs from "fs";

try {
  fs.appendFileSync("data.txt", "This is appended text\n");
  console.log("Data appended");
} catch (err) {
  console.log(err);
}
