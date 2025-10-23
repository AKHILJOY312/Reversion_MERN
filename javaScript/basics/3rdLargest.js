function thirdLargest(arr) {
  if (arr.length < 3) return null;

  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (let num of arr) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      third = second;
      second = num;
    } else if (num > third && num !== second && num !== first) {
      third = num;
    }
  }

  return third;
}

console.log(thirdLargest([10, 20, 4, 45, 99])); // 20
