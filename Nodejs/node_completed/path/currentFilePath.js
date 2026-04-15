import { fileURLToPath } from "url";
import path from "path";

// create __filename
const __filename = fileURLToPath(import.meta.url);

// create __dirname
const __dirname = path.dirname(__filename);

console.log(__dirname);
