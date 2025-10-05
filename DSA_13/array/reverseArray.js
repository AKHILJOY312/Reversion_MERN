function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

const arr = [1, 2, 3, 4, 5, 6];
reverse(arr);
console.log(arr);
