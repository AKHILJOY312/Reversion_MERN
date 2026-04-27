//remove char for the string
function reverseString(word) {
  if (word.length == 0) return word;
  return reverseString(word.slice(1)) + word[0];
}

const word = "hello";
console.log(reverseString(word));
