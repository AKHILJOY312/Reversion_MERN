//count '1' in [155, 101, 17711, 100])

const arr = [155, 101, 17711, 100, 11];

function countOne(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    while (temp > 0) {
      if (1 === temp % 10) {
        count++;
      }

      temp = Math.floor(temp / 10);
    }
  }
  console.log(count);
}

countOne(arr);
