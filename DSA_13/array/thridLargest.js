// A corrected function to find the third largest element
function findThirdLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current > first) {
      third = second;
      second = first;
      first = current;
    } else if (current > second && current < first) {
      third = second;
      second = current;
    } else if (current > third && current < second) {
      third = current;
    }
  }

  if (third === -Infinity) {
    return "Not enough unique elements to find the third largest.";
  }

  return third;
}

const arr = [2, 10, 5, 3, 4, 8, 6, 9, 12, 12];
console.log(findThirdLargest(arr));
