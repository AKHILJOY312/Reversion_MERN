class UniqueStack {
  constructor() {
    this.items = [];
    this.valueSet = new Set(); // For O(1) duplicate checking
  }

  push(value) {
    if (this.valueSet.has(value)) {
      return false; // Duplicate detected
    }

    this.items.push(value);
    this.valueSet.add(value);
    return true; // Successfully pushed
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const poppedValue = this.items.pop();
    this.valueSet.delete(poppedValue);
    return poppedValue;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  contains(value) {
    return this.valueSet.has(value);
  }

  clear() {
    this.items = [];
    this.valueSet.clear();
  }

  toString() {
    return `[${this.items.join(", ")}]`;
  }

  toArray() {
    return [...this.items];
  }
}
