//synchronous code --> microtask queue--> event loop phases

console.log("Synchronous Code - Start");

setImmediate(() => {
  console.log("Event Loop Phase 4: setImmediate()");
});

Promise.resolve().then(() => {
  console.log("Microtask 2: Promise.then()");
});

setTimeout(() => {
  console.log("Event Loop Phase 3: setTimeout()");
}, 0);
process.nextTick(() => {
  console.log("Microtask 1: process.nextTick()");
});
console.log("Synchronous Code - End");
