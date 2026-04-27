import fs from "fs";
import crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = crypto.createHash("sha256").update("my-secret-key").digest();

// Decrypt function
function decrypt(ivHex, encryptedData) {
  const iv = Buffer.from(ivHex, "hex");

  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  return decipher.update(encryptedData, "hex", "utf8") + decipher.final("utf8");
}

// Read and decrypt file
fs.readFile("error.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);

  const lines = data.trim().split("\n");

  lines.forEach((line) => {
    const [timestamp, iv, encrypted] = line.split(":");

    const decrypted = decrypt(iv, encrypted);

    console.log("Time:", timestamp);
    console.log("Message:", decrypted);
  });
});
