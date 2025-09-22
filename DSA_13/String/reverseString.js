//revers a string
function reversString(str) {
  if (str.length < 2) return str;

  return reversString(str.slice(1)) + str[0];
}

console.log(reversString("hello"));
