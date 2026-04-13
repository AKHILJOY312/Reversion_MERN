import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const location = path.join(__dirname, "users.json");

const arr = fs.readFileSync(location, "utf-8");

const arr2 = JSON.parse(arr);
for (let [key, values] of Object.entries(arr2)) {
  console.log(Object.values(values).reduce((acc, curr) => acc + curr));
}

console.log(Object.values(arr2));
