const today = new Date(); // current date
const tomorrow = new Date(today);

tomorrow.setDate(today.getDate() + 1);

console.log("Today:", today.toDateString());
console.log("Tomorrow:", tomorrow.toDateString());
