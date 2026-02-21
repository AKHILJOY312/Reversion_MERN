function greet(name, callback) {
  console.log("Hello " + name);

  callback(); // run the function we received
}

function sayBye() {
  console.log("Goodbye!");
}

greet("AJ", sayBye);
