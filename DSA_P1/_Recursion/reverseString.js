//remove char for the string
function revrseString(word) {
  if (word.length == 0) return word;
  return revrseString(word.slice(1)) + word[0];
}

const word = "hello";
console.log(revrseString(word));
