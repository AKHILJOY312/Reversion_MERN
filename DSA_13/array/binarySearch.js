//binary search on 2d array

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 5, 6, 7, 8];
console.log(binarySearch(arr, 3));
