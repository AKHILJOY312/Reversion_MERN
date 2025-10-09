//Write a function that prints numbers down to 1, then returns "Blast off!"
function prints(num) {
  if (num === 0) return "Blast Off";

  console.log(num);
  return prints(num - 1);
}

console.log(prints(5));
