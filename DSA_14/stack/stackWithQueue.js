class Stack {
  constructor() {
    this.q1 = []; // main queue (holds stack in reverse order)
    this.q2 = []; // helper queue
  }

  push(val) {
    // Step 1: Add new element to q2
    this.q2.push(val);

    // Step 2: Move all elements from q1 to q2 (so new element is at front)
    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }

    // Step 3: Swap the queues by reference (NO copying!)
    [this.q1, this.q2] = [this.q2, this.q1];
    // Now q1 has the correct order, and q2 is empty
  }

  pop() {
    if (this.q1.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.q1.shift(); // O(1) — front of q1 is top of stack
  }

  top() {
    if (this.q1.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.q1[0];
  }

  isEmpty() {
    return this.q1.length === 0;
  }
}
