function thirdLargest(arr) {
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (let num of arr) {
    if (num === first || num === second || num === third) continue;

    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? null : third;
}
