function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 3];
insertionSort(arr);

console.log(arr);
