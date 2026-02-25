class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }

    temp.next = newNode;
    newNode.prev = temp;
  }

  getMiddle(start, end) {
    let slow = start;
    let fast = start;

    while (fast !== end && fast.next !== end) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow;
  }

  binarySearch(target) {
    let start = this.head;
    let end = null;

    while (start !== end) {
      let mid = this.getMiddle(start, end);

      if (!mid) return false;

      if (mid.value === target) return true;

      if (mid.value < target) {
        start = mid.next;
      } else {
        end = mid;
      }
    }

    return false;
  }

  print() {
    let temp = this.head;
    let result = [];
    while (temp) {
      result.push(temp.value);
      temp = temp.next;
    }
    console.log(result.join(" <-> "));
  }
}

// Example usage
const dll = new DoublyLinkedList();
dll.insert(1);
dll.insert(3);
dll.insert(5);
dll.insert(7);
dll.insert(9);

dll.print();

console.log("Search 5:", dll.binarySearch(5)); // true
console.log("Search 4:", dll.binarySearch(4)); // false
