function findThirdLargest(arr) {
  let first = -Infinity; // biggest
  let second = -Infinity; // second biggest
  let third = -Infinity; // third biggest

  for (const num of arr) {
    // skip duplicates
    if (num === first || num === second || num === third) continue;

    // new biggest number
    if (num > first) {
      third = second;
      second = first;
      first = num;
    }

    // new second biggest
    else if (num > second) {
      third = second;
      second = num;
    }

    // new third biggest
    else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? "Not enough unique elements" : third;
}

const arr = [2, 10, 5, 3, 4, 8, 6, 9, 12, 12];
console.log(findThirdLargest(arr));
