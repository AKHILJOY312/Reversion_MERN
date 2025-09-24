function nextGap(gap) {
  if (gap <= 1) return 0;
  return Math.ceil(gap / 2);
}

function inPlaceMerge(arr, start, end) {
  let gap = nextGap(end - start + 1);

  while (gap > 0) {
    let i = start;
    let j = start + gap;

    while (j <= end) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
      }
      i++;
      j++;
    }
    gap = nextGap(gap);
  }
}

function inPlaceMergeSort(arr, l = 0, r = arr.length - 1) {
  if (l < r) {
    let m = Math.floor((l + r) / 2); //find the average between the points
    inPlaceMergeSort(arr, l, m);
    inPlaceMergeSort(arr, m + 1, r);
    inPlaceMerge(arr, l, r);
  }
}

const arr = [2, 7, 4, 9, 4, 6, 1, 5];
inPlaceMergeSort(arr);
console.log(arr); // [1, 2, 4, 4, 5, 6, 7, 9]
