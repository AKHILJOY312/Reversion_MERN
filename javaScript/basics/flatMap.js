const arr = [3, [4, [5]], 6, [7, 8]];
const temp = arr.flatMap((x) => x);
console.log(temp);
