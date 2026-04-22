function reverse(arr) {
  if (arr.length <= 1) return arr;

  let temp = [...reverse(arr.slice(1)), arr[0]];
  console.log(temp);
  return temp;
}

const arr = [1, 2, 3, 4, 5];
reverse(arr);
