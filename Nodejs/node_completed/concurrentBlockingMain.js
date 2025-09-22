console.log("Start");

// Blocking code (CPU-heavy loop)
for (let i = 0; i < 1e9; i++) {}

console.log("After heavy loop");

setTimeout(() => {
  console.log("Timeout executed");
}, 1000);
