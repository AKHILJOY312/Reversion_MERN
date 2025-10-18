const fs = require("fs");

const filePath = "./orders.json";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    const orders = JSON.parse(data);

    for (const product in orders) {
      if (Object.hasOwnProperty.call(orders, product)) {
        const ratings = Object.values(orders[product]);

        const sum = ratings.reduce((acc, currentVal) => acc + currentVal, 0);

        const average = sum / ratings.length;

        console.log(
          `The average rating for ${product} is: ${average.toFixed(2)}`
        );
      }
    }
  } catch (parseErr) {
    console.error("Error parsing JSON:", parseErr);
  }
});
