//remove char for the string
function removeLetter(word, letter) {
  if (word.length === 0) {
    return word;
  }

  let temp = word[0];
  if (word[0] === letter) {
    temp = "";
  }

  return temp + removeLetter(word.slice(1), letter);
}

const word = "mddddddddddddddddalayalaaaaaaaaaaaaaaam";
console.log(removeLetter(word, "m"));
