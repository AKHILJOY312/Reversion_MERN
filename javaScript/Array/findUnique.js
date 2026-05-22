const arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7];
const newArr = [];
//filter the unique number
const seen = {};
for (let i = 0; i < arr.length; i++) {
  seen[arr[i]] = (seen[arr[i]] || 0) + 1;
}

for (let num in seen) {
  if (seen[num] == 1) {
    newArr.push(num);
  }
}

console.log(seen);
console.log(newArr); //[ 4, 5, 7]
