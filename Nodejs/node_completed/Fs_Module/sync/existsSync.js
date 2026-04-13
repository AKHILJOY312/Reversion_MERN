import fs from "fs";

//for checking the file exists of not;
const exists = fs.existsSync("./text.txt");

console.log(exists);
