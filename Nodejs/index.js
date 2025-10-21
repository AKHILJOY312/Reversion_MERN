const { spawn } = require("child_process");

const child = spawn("node", ["scripts.js", "AJ"]);

child.stdout.on("data", (data) => {
  console.log(data.toString());
});

child.stderr.on("data", (data) => {
  console.log(data.toString());
});

child.on("close", (code) => {
  console.log(code);
});
