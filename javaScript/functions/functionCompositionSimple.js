const comp = (func1, func2) => (variableForFunction) =>
  func1(func2(variableForFunction));

function mul(x) {
  return x * x;
}

function div(y) {
  return y / 2;
}
const a = 8;
const temp = comp(mul, div);
console.log(temp(8));
