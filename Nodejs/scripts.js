// script.js

// Get command-line arguments (node script.js sam)
// process.argv[0] = 'node'
// process.argv[1] = 'script.js'
// process.argv[2] = 'sam'

const name = process.argv[2];

if (!name) {
  console.error("Usage: node script.js <name>");
  process.exit(1);
}

console.log(`Hello, ${name}!`);
