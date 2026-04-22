//Return how many times a character appears in a string.
function countChar(str, ch, i = 0) {
  if (i === str.length) return 0;
  let isSameChar = str[i] === ch ? 1 : 0;
  const restCount = countChar(str, ch, i + 1);
  return isSameChar + restCount;
}
console.log(countChar("banana", "a")); // 3
