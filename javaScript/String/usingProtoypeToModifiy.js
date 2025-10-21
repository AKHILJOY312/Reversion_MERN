String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

// Now every string has .reverse()
console.log("hello".reverse()); // "olleh"
