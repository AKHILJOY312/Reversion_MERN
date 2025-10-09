//Return how many times a character appears in a string.
function countChar(str, ch, i = 0) {
  if (i === str.length) return 0;
  return (str[i] === ch ? 1 : 0) + countChar(str, ch, i + 1);
}
console.log(countChar("banana", "a")); // 3
