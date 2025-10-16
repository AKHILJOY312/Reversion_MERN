const { spawn } = require("child_process");

const python = spawn("python", ["script.py", "AJ"]);

python.stdout.on("data", (data) => {
  console.log(`Output: ${data.toString()}`);
});

python.stderr.on("data", (data) => {
  console.error(`Error: ${data.toString()}`);
});

python.on("close", (code) => {
  console.log(`Python process exited with code ${code}`);
});
