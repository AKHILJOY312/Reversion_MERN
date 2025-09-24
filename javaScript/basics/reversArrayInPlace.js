function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
const arr = [2, 4, 5, 6, 7, 8];
reverseArray(arr);
console.log(arr);
