//checking whter prime of not
function isPrime(val) {
  if (val < 2) return false;
  for (let i = 2; i * i <= val; i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(25)); // false
