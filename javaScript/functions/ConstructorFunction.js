function Greet(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("Hello " + this.name);
  };
}

const user1 = new Greet("Sam");

user1.sayHi();
