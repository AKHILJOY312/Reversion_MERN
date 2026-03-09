const { spawn } = require("child_process");

const child = spawn("python", ["script.py", "AJ"]);

child.stdout.on("data", (data) => {
  console.log(`Output: ${data.toString()}`);
});

child.stderr.on("data", (data) => {
  console.error(`Error: ${data.toString()}`);
});

child.on("close", (code) => {
  console.log(`Python process exited with code ${code}`);
});
