class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }

  // Simple hash function for strings
  _hash(key) {
    let hash = 0;
    for (let char of String(key)) {
      hash += char.charCodeAt(0);
    }
    return hash % this.table.length;
  }

  // Add or update key-value pair
  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) this.table[index] = [];
    this.table[index].push([key, value]);
  }

  // Get value by key
  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let [k, v] of this.table[index]) {
        if (k === key) return v;
      }
    }
    return undefined;
  }
}

// Example usage
const ht = new HashTable();
ht.set("apple", 5);
ht.set("banana", 8);
console.log(ht.get("apple")); // 5
console.log(ht.get("banana")); // 8
console.log(ht.get("orange")); // undefined
