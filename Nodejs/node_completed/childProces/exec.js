//Exec Version
import { exec } from "child_process";

exec("python script.py AJ", (err, stdout, stderr) => {
  if (err) console.error(err);
  else console.log(stdout);
});
