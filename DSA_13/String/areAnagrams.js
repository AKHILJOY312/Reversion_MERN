//check if two strings are anagrams:
//---->also can use frequency method

function areAnagrams(str1, str2) {
  // Normalize: convert to lowercase and remove non-alphabetic characters
  const normalize = (s) => s.toLowerCase().replace(/[^a-z]/g, "");

  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);

  // If lengths differ, they can't be anagrams
  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  // Sort characters and compare
  return (
    normalizedStr1.split("").sort().join("") ===
    normalizedStr2.split("").sort().join("")
  );
}

// Examples:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("evil", "vile")); // true
console.log(areAnagrams("a gentleman", "elegant man")); // true
console.log(areAnagrams("hello", "bello")); // false
console.log(areAnagrams("The Eyes", "They See")); // true
