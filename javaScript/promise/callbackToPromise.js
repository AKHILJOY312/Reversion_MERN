//convert the following to the promise
// function processUserData(name, callback) {
//     console.log(`Processing data for ${name}...`);
//     callback(name);
// }

// function displayUserData(user) {
//     console.log(`User ${user} data processed successfully.`);
// }

// processUserData("Bob", displayUserData);

function processUserData(name) {
  console.log(`Processing data for ${name}...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        displayUserData(name);
        resolve("Success");
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

function displayUserData(user) {
  console.log(`User ${user} data processed successfully.`);
}

processUserData("Bob")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
