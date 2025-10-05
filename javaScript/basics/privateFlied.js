class MyClass {
  #privateField = "This is private";

  constructor() {
    console.log(this.#privateField); // Accessible within the class
  }

  getPrivateField() {
    return this.#privateField; // Accessible within the class
  }
}

const instance = new MyClass();
// console.log(instance.#privateField); // This would cause a SyntaxError: Private field '#privateField' must be declared in an enclosing class
