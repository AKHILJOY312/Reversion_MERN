//• Reverse each word in a string f

const ReverseStringWord = (str) =>
  str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

console.log(ReverseStringWord("hello form me and him"));
