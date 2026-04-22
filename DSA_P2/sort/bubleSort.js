function bubbleSortOptimized(arr) {
  let n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
  return arr;
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6]; // Best-case scenario
const partiallySortedArray = [1, 5, 3, 4, 2, 6];
const reversedArray = [6, 5, 4, 3, 2, 1]; // Worst-case scenario

console.log("Sorted array (optimized):", bubbleSortOptimized(sortedArray));
console.log(
  "Partially sorted array (optimized):",
  bubbleSortOptimized(partiallySortedArray)
);
console.log("Reversed array (optimized):", bubbleSortOptimized(reversedArray));
