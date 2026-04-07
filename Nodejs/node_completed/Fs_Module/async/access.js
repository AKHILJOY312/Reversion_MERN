const fs = require("fs");

fs.access("file.txt", fs.constants.F_OK, (err) => {
  if (err) {
    console.log("Not exists");
  } else {
    console.log("Exists");
  }
});
