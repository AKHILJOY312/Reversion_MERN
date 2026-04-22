//binary recursion
const arr = [1, 2, 4, 6, 8, 9, 12, 45, 56];

function binaryRecursion(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binaryRecursion(arr, target, left, mid - 1);
  }
  return binaryRecursion(arr, target, mid + 1, right);
}

console.log(binaryRecursion(arr, 12));
