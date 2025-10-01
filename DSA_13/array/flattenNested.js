//flatern a nested array
//give a nesed array
//go to each element
//check if the element is array or not if array use the same funtion ;
//retrun the result

function flattenRecursively(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenRecursively(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattened = flattenRecursively(nestedArray);
console.log(flattened);
// Output: [1, 2, 3, 4, 5, 6]
