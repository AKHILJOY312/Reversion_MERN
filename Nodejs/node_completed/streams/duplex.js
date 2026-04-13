import { Duplex } from "stream";

class MyDuplex extends Duplex {
  constructor() {
    super();
    this.data = ["Hello", "AJ", "Duplex Stream"];
  }

  _read() {
    this.push(this.data.shift() || null);
  }

  _write(chunk, encoding, callback) {
    console.log("Writing:", chunk.toString());
    callback();
  }
}

const stream = new MyDuplex();

stream.on("data", (chunk) => {
  console.log("Reading:", chunk.toString());
});

stream.write("MERN Developer");
stream.end();
