//find the second largest element in the array
const arr = [2, 10, 5, 3, 4, 8, 6, 9, 12, 12];

function secondLargest(arr) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (second < arr[i] && arr[i] !== first) {
      second = arr[i];
    }
  }
  console.log(first);
  return second;
}
console.log(secondLargest(arr));
