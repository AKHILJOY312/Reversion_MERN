const fs = require("fs");

// Specify the path to your JSON file
const filePath = "./orders.json";

// Read the file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    // Parse the JSON data
    const orders = JSON.parse(data);

    // Loop through each product to calculate the average rating
    for (const product in orders) {
      if (Object.hasOwnProperty.call(orders, product)) {
        const ratings = Object.values(orders[product]);

        // Calculate the sum of ratings
        const sum = ratings.reduce((acc, currentVal) => acc + currentVal, 0);

        // Calculate the average
        const average = sum / ratings.length;

        // Print the result
        console.log(
          `The average rating for ${product} is: ${average.toFixed(2)}`
        );
      }
    }
  } catch (parseErr) {
    console.error("Error parsing JSON:", parseErr);
  }
});
