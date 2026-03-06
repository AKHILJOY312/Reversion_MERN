function* genFunc() {
  let x = 0;
  let num = 0;
  while (true) {
    num = num + 1;
    yield num;
  }
}

const mul = genFunc();

console.log(mul.next().value);
console.log(mul.next().value);
console.log(mul.next().value);
console.log(mul.next().value);
console.log(mul.next().value);
