const arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7];
const newArr = [];
//filter the uniqe number
const seen = {};
for (let i = 0; i < arr.length; i++) {
  if (seen[arr[i]]) {
    continue;
  } else {
    newArr.push(arr[i]);

    seen[arr[i]] = true;
  }
}
console.log(newArr);
