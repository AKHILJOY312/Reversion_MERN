function add(a) {
  return function (b) {
    if (b !== undefined) {
      return add(a + b); // keep chaining
    }
    return a; // stop if no argument given
  };
}

console.log(add(1)(2)(3)(4)()); // 10
console.log(add(5)(10)(15)()); // 30
