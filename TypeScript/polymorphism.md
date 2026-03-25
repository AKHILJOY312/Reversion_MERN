# Polymorphism in TypeScript

Polymorphism allows objects of different types to be treated as a common
type, while behavior changes based on the actual object.

## Types of Polymorphism

1.  Runtime Polymorphism (Subtype Polymorphism)
2.  Compile-time Polymorphism (Generics & Method Overloading)

---

## 1. Runtime Polymorphism

### Example: Bank Account

```ts
abstract class BankAccount {
  balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  abstract withdraw(amount: number): void;

  getAccountType(): string {
    return "Generic Account";
  }
}

class SavingsAccount extends BankAccount {
  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from Savings`);
    }
  }

  override getAccountType(): string {
    return "Savings Account";
  }
}

class CurrentAccount extends BankAccount {
  overdraftLimit: number = 500;

  withdraw(amount: number): void {
    if (this.balance + this.overdraftLimit >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from Current`);
    }
  }

  override getAccountType(): string {
    return "Current Account";
  }
}
```

---

## 2. Compile-time Polymorphism

### Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
const str = identity<string>("hello");
```

### Generic Class

```ts
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}
```

---

## Method Overloading

```ts
function greet(name: string): string;
function greet(name: string, greeting: string): string;

function greet(name: string, greeting?: string): string {
  if (greeting) return `${greeting}, ${name}!`;
  return `Hello, ${name}!`;
}
```

---

## Quick Summary

Type Runtime Compile-time

---

Based on Object Type
Achieved by Inheritance Generics
Decision time Runtime Compile time

---

## Interview One-liner

Polymorphism in TypeScript allows the same function or method to behave
differently at runtime using inheritance or at compile time using
generics and method overloading.
