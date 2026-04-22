function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (const num of arr) {
    // skip duplicates of the largest
    if (num === first) continue;

    // new largest
    if (num > first) {
      second = first;
      first = num;
    }

    // new second largest
    else if (num > second) {
      second = num;
    }
  }

  return second === -Infinity ? "Not enough unique elements" : second;
}

const arr = [2, 10, 5, 3, 4, 8, 6, 9, 12, 12];
console.log(secondLargest(arr));
