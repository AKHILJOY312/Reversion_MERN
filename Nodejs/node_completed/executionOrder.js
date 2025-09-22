//synchronous code --> microtask queue--> event loop phases

console.log("Synchronous Code - Start");

process.nextTick(() => {
  console.log("Microtask 1: process.nextTick()");
});

setImmediate(() => {
  console.log("Event Loop Phase 4: setImmediate()");
});

console.log("Synchronous Code - End");

Promise.resolve().then(() => {
  console.log("Microtask 2: Promise.then()");
});

setTimeout(() => {
  console.log("Event Loop Phase 3: setTimeout()");
}, 0);
