const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("eventName", (data) => {
  console.log("Event received:", data);
});
emitter.emit("eventName", "Hello World");
