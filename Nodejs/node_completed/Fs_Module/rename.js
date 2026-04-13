import fs from "fs";

const exists = fs.rename("./newText.txt", "./text.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("worked");
});
