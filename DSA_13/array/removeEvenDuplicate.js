function removeEvenDuplicate(arr) {
  const result = [];
  const evenCounts = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num % 2 !== 0) {
      // If the number is odd, add it to the result array
      result.push(num);
    } else {
      // If the number is even, track its count
      evenCounts[num] = (evenCounts[num] || 0) + 1;

      // Only add the number to the result array if it's the first time we've seen it
      if (evenCounts[num] === 1) {
        result.push(num);
      }
    }
  }

  return result;
}

const arr = [2, 2, 5, 9, 3, 3, 4, 8, 4, 6, 6];
const newArr = removeEvenDuplicate(arr);

console.log(newArr);
// Expected Output: [2, 5, 9, 3, 3, 4, 8, 6]
