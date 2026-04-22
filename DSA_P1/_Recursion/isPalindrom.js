function isPalindrom(word) {
  if (word.length <= 1) return true;
  if (word[0] !== word[word.length - 1]) return false;
  console.log(word.slice(1, word.length - 1));
  return isPalindrom(word.slice(1, word.length - 1));
}

const word = "malayalam";
console.log(isPalindrom(word));
