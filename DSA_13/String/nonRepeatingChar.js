//•	First non-repeating character in a string
function nonRepeatingChar(str) {
  const freq = {};

  // count characters
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // find first non-repeating
  for (let char of str) {
    if (freq[char] === 1) return char;
  }

  return null;
}

console.log(nonRepeatingChar("ssstttu")); // "u"
console.log(nonRepeatingChar("aabbcde")); // "c"
console.log(nonRepeatingChar("aabb")); // null
