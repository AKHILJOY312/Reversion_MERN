import fs from "fs";

try {
  fs.writeFileSync("data.txt", "Hello AJ\n");
  console.log("File written");
} catch (err) {
  console.log(err);
}
