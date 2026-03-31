const express = require("express");
const crypto = require("crypto");
const fs = require("fs");

const app = express();
app.use(express.json());

// key and iv
const key = crypto.createHash("sha256").update("mysecretkey").digest();
const iv = Buffer.alloc(16, 0);

// encrypt
function encrypt(text) {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

// decrypt
function decrypt(text) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(text, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

// route
app.post("/data", (req, res) => {
  const message = req.body.message;

  // encrypt
  const encrypted = encrypt(message);

  // write to file
  fs.writeFileSync("data.txt", encrypted);

  // read from file
  const fileData = fs.readFileSync("data.txt", "utf8");

  // decrypt
  const decrypted = decrypt(fileData);

  res.json({
    original: message,
    encrypted: encrypted,
    fileData: fileData,
    decrypted: decrypted,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
