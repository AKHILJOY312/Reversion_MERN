class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a new node to the end of the list
  // Equivalent to enqueueBack or addLast
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Remove the last node from the list
  // Equivalent to dequeueBack or removeLast
  pop() {
    if (!this.head) return undefined;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  // Remove the first node from the list
  // Equivalent to dequeueFront or removeFirst
  shift() {
    if (!this.head) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  // Add a new node to the beginning of the list
  // Equivalent to enqueueFront or addFirst
  unshift(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Get a node by its index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, currentNode;
    if (index <= this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }

  // Update a node's value at a given index
  set(index, data) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.data = data;
      return true;
    }
    return false;
  }

  // Insert a node at a specific index
  insert(index, data) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(data);
    if (index === this.length) return !!this.push(data);

    const newNode = new Node(data);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  // Remove a node at a specific index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  // Print the list for visualization
  traverse() {
    let currentNode = this.head;
    const arr = [];
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(arr.join(" <-> "));
  }
}

// Example usage:
const dll = new DoublyLinkedList();

// Adding elements
dll.push(10);
dll.push(20);
dll.push(30);
console.log("After push:");
dll.traverse(); // Expected: 10 <-> 20 <-> 30

dll.unshift(5);
console.log("After unshift:");
dll.traverse(); // Expected: 5 <-> 10 <-> 20 <-> 30

// Removing elements
dll.pop();
console.log("After pop:");
dll.traverse(); // Expected: 5 <-> 10 <-> 20

dll.shift();
console.log("After shift:");
dll.traverse(); // Expected: 10 <-> 20

// Inserting and removing at an index
dll.insert(1, 15);
console.log("After insert at index 1:");
dll.traverse(); // Expected: 10 <-> 15 <-> 20

dll.remove(1);
console.log("After remove at index 1:");
dll.traverse(); // Expected: 10 <-> 20
