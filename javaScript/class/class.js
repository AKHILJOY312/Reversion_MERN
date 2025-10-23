class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Buddy");

dog.eat(); // Inherited from Animal
dog.bark(); // Defined in Dog
