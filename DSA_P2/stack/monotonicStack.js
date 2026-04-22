/**
 * Monotonic Stack Class
 */
class MonotonicStack {
  constructor(increasing = true) {
    this.stack = [];
    this.increasing = increasing; // true for increasing, false for decreasing
  }

  /**
   * Push element while maintaining monotonic property
   * @param {*} element - Element to push
   * @param {function} [comparator] - Optional custom comparator
   */
  push(element, comparator = null) {
    const compare = comparator || ((a, b) => a - b);

    // For increasing stack: remove elements greater than current
    // For decreasing stack: remove elements smaller than current
    while (!this.isEmpty()) {
      const topElement = this.peek();
      const comparison = compare(topElement, element);

      if (this.increasing && comparison <= 0) {
        // Increasing stack and top <= element, maintain property
        break;
      } else if (!this.increasing && comparison >= 0) {
        // Decreasing stack and top >= element, maintain property
        break;
      } else {
        // Violates monotonicity, pop it
        this.pop();
      }
    }

    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack.length > 0
      ? this.stack[this.stack.length - 1]
      : undefined;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  toArray() {
    return [...this.stack];
  }

  toString() {
    const order = this.increasing ? "Increasing" : "Decreasing";
    return `${order} Stack: [${this.stack.join(", ")}]`;
  }
}

const stack = new MonotonicStack();

const arr = [2, 5, 4, 8, 6, 9, 1, 56];
arr.forEach((val) => stack.push(val));

console.log(stack);
