//•	Count words in a sentence without inbuilt functions
const str = "    hello hi how are you     ";

function countWords(str) {
  let count = 0;
  let isWord = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && !isWord) {
      count++;
      isWord = true;
    } else if (str[i] === " ") {
      isWord = false;
    }
  }
  return count;
}

console.log(countWords(str));
