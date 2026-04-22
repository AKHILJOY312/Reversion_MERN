function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
const sortedArr = selectionSort(arr);
console.log("Sorted array:", sortedArr);

const arr2 = [5, 4, 3, 2, 1];
console.log("\nOriginal array:", arr2);
const sortedArr2 = selectionSort(arr2);
console.log("Sorted array:", sortedArr2);

// Output:
// Original array: [64, 25, 12, 22, 11]
// Sorted array: [11, 12, 22, 25, 64]
//
// Original array: [5, 4, 3, 2, 1]
// Sorted array: [1, 2, 3, 4, 5]
