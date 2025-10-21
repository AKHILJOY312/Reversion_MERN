class Bank {
  #balance;

  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.#balance = initialBalance;
  }

  // Getter for balance
  get balance() {
    return this.#balance;
  }

  // Setter for balance (optional, but useful for validation)
  set balance(val) {
    if (val < 0) {
      throw new Error("Balance cannot be negative.");
    }
    this.#balance = val;
  }

  debit(val) {
    if (val <= 0) {
      return "Debit amount must be positive.";
    }
    if (this.#balance < val) {
      return "Not sufficient balance.";
    }
    this.#balance -= val;
    return `Debited ${val}. New balance: ${this.#balance}`;
  }

  credit(val) {
    if (val <= 0) {
      return "Credit amount must be positive.";
    }
    this.#balance += val;
    return `Credited ${val}. New balance: ${this.#balance}`;
  }

  checkBalance() {
    console.log(`Current balance: ${this.#balance}`);
    return this.#balance;
  }
}

// Example usage:
const myAccount = new Bank(100);
console.log(myAccount.debit(30)); // Debited 30. New balance: 70
console.log(myAccount.credit(50)); // Credited 50. New balance: 120
myAccount.checkBalance(); // Current balance: 120

// Using getter
console.log(myAccount.balance); // 120

// Using setter (with validation)
myAccount.balance = 200;
console.log(myAccount.balance); // 200

// This will throw an error:
// myAccount.balance = -50;         // Error: Balance cannot be negative.
