function isPalindrome(head) {
  if (!head) return true;

  // Copy values to array
  const values = [];
  let curr = head;
  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }

  // Check if array is palindrome
  let left = 0,
    right = values.length - 1;
  while (left < right) {
    if (values[left] !== values[right]) return false;
    left++;
    right--;
  }
  return true;
}
