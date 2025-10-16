const fs = require("fs");
const path = require("path");

const location = path.join(__dirname, "users.json");

const arr = fs.readFileSync(location, "utf-8");

const arr2 = JSON.parse(arr);
for (let [key, values] of Object.entries(arr2)) {
  console.log(Object.values(values).reduce((acc, curr) => acc + curr));
}

console.log(Object.values(arr2));
