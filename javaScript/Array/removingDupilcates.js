const arr = [1, 3, 2, 3, 4, 5, 2, 6, 7, 8, 8, 9];
const seen = {};
const result = [];

for (let i = 0; i < arr.length; i++) {
  if (!seen[arr[i]]) {
    result.push(arr[i]);
    seen[arr[i]] = true;
  }
}

console.log(result);
