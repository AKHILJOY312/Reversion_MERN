function Greet(name) {
  this.name = name;
}

Greet.prototype.sayHi = function () {
  console.log("Hello " + this.name);
};

const user1 = new Greet("Sam");
const user2 = new Greet("AJ");

user1.sayHi();
user2.sayHi();
