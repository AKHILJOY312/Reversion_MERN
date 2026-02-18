const val = 2;
const val2 = 4;

const myPromise1 = new Promise((res, rej) => {
  if (val === 2) {
    res("Promise 1 ok");
  } else {
    rej("Promise 1 bad");
  }
});

const myPromise2 = new Promise((res, rej) => {
  if (val2 === 2) {
    res("Promise 2 ok");
  } else {
    rej("Promise 2 bad");
  }
});

const myPromise3 = new Promise((res, rej) => {
  if (val === 2) {
    res("Promise 3 ok");
  } else {
    rej("Promise 3 bad");
  }
});

Promise.allSettled([myPromise1, myPromise2, myPromise3]).then((results) => {
  console.log("All settled:");
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} fulfilled with:`, result.value);
    } else {
      console.log(`Promise ${index + 1} rejected with:`, result.reason);
    }
  });
});
