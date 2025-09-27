class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Create linked list from array
  createFromArray(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
    }
    this.head = dummy.next;
  }

  print() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }

  // Remove Nth node from end using two-pointer technique
  removeNthFromEnd(n) {
    let dummy = new ListNode(0);
    dummy.next = this.head;
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }

    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
  }
}

// ---------------------
// Usage Example
// ---------------------

let list = new LinkedList();
list.createFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("Original list:");
list.print();

list.removeNthFromEnd(3); // remove 2nd node from end

console.log("After removing 2nd node from end:");
list.print();
