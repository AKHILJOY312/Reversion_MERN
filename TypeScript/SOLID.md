# SOLID Principles in TypeScript

The SOLID principles are five foundational guidelines for
object-oriented design introduced by Robert C. Martin (Uncle Bob).\
They help create maintainable, scalable, and flexible code. TypeScript
supports SOLID very well through **interfaces, classes, generics, and
dependency injection**.

---

# S --- Single Responsibility Principle (SRP)

**A class should have only one reason to change.**

## Example

```ts
class ShoppingCart {
  private items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  getItems(): string[] {
    return this.items;
  }
}

class TotalCalculator {
  calculate(cart: ShoppingCart): number {
    return cart.getItems().length * 10;
  }
}

class PaymentProcessor {
  process(cart: ShoppingCart) {
    console.log("Processing payment...");
  }
}
```

### Idea

- ShoppingCart → manages items
- TotalCalculator → calculates total
- PaymentProcessor → handles payment

Each class has **one responsibility**.

---

# O --- Open Closed Principle (OCP)

**Open for extension, closed for modification.**

## Example

```ts
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class AreaCalculator {
  calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
}
```

### Idea

We can add:

```ts
class Triangle implements Shape {}
```

without modifying existing code.

---

# L --- Liskov Substitution Principle (LSP)

**Subclasses should be replaceable for their base class without breaking
the program.**

## Example

```ts
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Sparrow implements Flyable {
  fly() {
    console.log("Flying...");
  }
}

class Penguin implements Swimmable {
  swim() {
    console.log("Swimming...");
  }
}
```

### Idea

- Sparrow can fly
- Penguin cannot fly
- So we separate behaviors

Avoid forcing wrong behavior.

---

# I --- Interface Segregation Principle (ISP)

**Clients should not depend on interfaces they do not use.**

## Example

```ts
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

class HumanWorker implements Workable, Eatable, Sleepable {
  work() {}
  eat() {}
  sleep() {}
}

class RobotWorker implements Workable {
  work() {}
}
```

### Idea

- Human → work, eat, sleep
- Robot → only work
- No unnecessary methods

---

# D --- Dependency Inversion Principle (DIP)

**Depend on abstractions, not concrete implementations.**

## Bad Example

```ts
class MySQLDatabase {
  save(data: string) {
    console.log("Saving to MySQL");
  }
}

class UserService {
  private db = new MySQLDatabase();

  saveUser(user: string) {
    this.db.save(user);
  }
}
```

Problem: Tight coupling.

---

## Good Example

```ts
interface Database {
  save(data: string): void;
}

class MySQLDatabase implements Database {
  save(data: string) {
    console.log("Saving to MySQL");
  }
}

class MongoDatabase implements Database {
  save(data: string) {
    console.log("Saving to MongoDB");
  }
}

class UserService {
  constructor(private db: Database) {}

  saveUser(user: string) {
    this.db.save(user);
  }
}
```

### Usage

```ts
new UserService(new MongoDatabase());
```

Now it is flexible and loosely coupled.

---

# Quick Summary

Principle Meaning

---

SRP One class → One responsibility
OCP Extend without modifying
LSP Replace child with parent safely
ISP Small specific interfaces
DIP Depend on interfaces

---

# Interview One-Liner

**SOLID principles help build scalable and maintainable TypeScript
applications by ensuring single responsibility, extensibility, proper
inheritance, small interfaces, and dependency on abstractions.**
