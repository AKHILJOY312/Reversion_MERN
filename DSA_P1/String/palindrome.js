//palindrome checker

function checkPalindrome(str) {
  const strLength = str.length;
  if (strLength < 2) return true;
  if (str[0] !== str[strLength - 1]) return false;
  return checkPalindrome(str.slice(1, strLength - 1));
}

console.log(checkPalindrome("malam"));
