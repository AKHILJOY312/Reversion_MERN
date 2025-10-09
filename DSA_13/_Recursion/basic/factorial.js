//🔹 Challenge 2: Factorial (return builds up)
function fact(t) {
  if (t === 0) return 1;

  return fact(t - 1) * t;
}

console.log(fact(3));
