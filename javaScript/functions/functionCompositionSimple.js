const comp = (x, y) => (f) => x(y(f));

function mul(x) {
  return x * x;
}

function div(y) {
  return y / 2;
}
const a = 8;
const temp = comp(mul, div);
console.log(temp(8));
