import EventEmitter from "node:events";
import fs from "fs";
import crypto from "crypto";

const emitter = new EventEmitter();

//  Config
const algorithm = "aes-256-cbc";
const key = crypto.createHash("sha256").update("my-secret-key").digest();

//  Separate encryption function
function encrypt(data) {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");

  return {
    iv: iv.toString("hex"),
    encrypted,
  };
}

//  Event listener
emitter.on("Emitter", (data) => {
  const { iv, encrypted } = encrypt(data);

  const fdata = `\n${new Date().toISOString()}:${iv}:${encrypted}`;

  fs.appendFile("error.txt", fdata, "utf-8", (err) => {
    if (err) console.log(err);
  });
});

//  Trigger event
emitter.emit("Emitter", "error that occurred");
