//find the third largest elment in the array
const arr = [2, 10, 5, 3, 4, 8, 6, 9, 12, 12];

function secondLargest(arr) {
  let first = 0;
  let second = 0;
  let third = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (second < arr[i] && arr[i] !== first) {
      third = second;
      second = arr[i];
    } else if (third < arr[i] && arr[i] !== second && arr[i] !== first) {
      third = arr[i];
    }
  }

  return third;
}
console.log(secondLargest(arr));
