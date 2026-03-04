function processUserData(name, callback) {
  console.log(`Processing data for ${name}...`);
  callback(name);
}

function displayUserData(user) {
  console.log(`User ${user} data processed successfully.`);
}

processUserData("Bob", displayUserData);
