const { execFile } = require("child_process");

execFile("python", ["script.py", "AJ"], (err, stdout, stderr) => {
  if (err) console.error(err);
  else console.log(stdout);
});
