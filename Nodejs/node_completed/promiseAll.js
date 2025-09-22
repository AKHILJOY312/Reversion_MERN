const { setTimeout: delay } = require("node:timers/promises");

const fetchData1 = delay(1000).then(() => "Data from API 1");
const fetchData2 = delay(2000).then(() => {
  throw new Error("something went wrong");
});

Promise.all([fetchData1, fetchData2])
  .then((results) => {
    console.log(results); // ['Data from API 1', 'Data from API 2']
  })
  .catch((error) => {
    console.error("Error:", error);
  });
