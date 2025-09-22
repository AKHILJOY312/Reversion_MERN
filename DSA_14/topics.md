content = """# Data Structures & Algorithms Roadmap

## 1. General Data Structure Concepts (Foundation)

- Linear vs Non-Linear Data Structures (arrays, linked lists vs trees, graphs).
- Time & Space Complexity (Big-O, Omega, Theta).
- Logarithmic Values & Functions (use in sorting/searching).
- Why Strings are Immutable.
- Practice DSA Theory Questions.

---

## 2. Sorting Algorithms (Core Algorithms)

- **Bubble Sort** – O(n) best case, stable.
- **Insertion Sort** – O(n²).
- **Selection Sort** – O(n²).
- **In-Place Sorting** – definition & examples.
- **Stable Sorting** – Bubble, Insertion, Merge.
- **Merge Sort**
  - Concept & implementation.
  - O(n log n).
  - Good for linked lists.
  - Sort string using Merge Sort.
  - Merge two sorted arrays/lists in O(n).
  - Disadvantages.
- **Quick Sort**
  - Concept & time complexity (avg O(n log n), worst O(n²)).
  - Pivot selection.
  - Implementation without extra arrays.
  - Disadvantages vs Merge Sort.
- **Heap Sort** – O(n log n).
- **Comparison of Sorting Algorithms** – complexities & use cases.
- Best sorting for partially sorted/small arrays (Insertion Sort).
- Choosing sorting algorithm based on input type.
- Check if array is sorted (linear time).
- Sort array of objects by property (e.g., `.amount`).
- Sort students using Merge Sort.
- Combine two sorted arrays into one (O(n)).

---

## 3. Stack (Core Data Structure)

- Applications (expression eval, backtracking).
- Stack Pointer – role.
- Stack Overflow vs Underflow.
- Stack vs Array.
- Stack using Linked List (SLL).
- Push element complexity O(1).
- Undo/Redo use case.
- Reverse string using stack (in-place & general).
- Palindrome check using stack.
- **LeetCode #20 Valid Parentheses** (+ modified version: count invalid pairs).
- MinStack (push, pop, getMin in O(1)).
- Stack using Queue.
- Delete specific node from stack.
- Delete middle element of stack.
- Reverse a stack (recursion/temp stack).
- Sort a stack using temporary stack.
- Stack that rejects duplicates.
- Monotonic Stack (next greater element).
- Call Stack (program execution).

---

## 4. Queue (Core Data Structure)

- Applications (scheduling, BFS).
- Types of Queues: priority, double-ended, circular, bounded.
- Queue using Linked List.
- Enqueue, Dequeue, Display operations.
- Circular Queue (with max length).
- Double-Ended Queue.
- Priority Queue (Dijkstra’s algorithm).
- Circular Buffers.
- Queue using Stacks.
- Reverse a Queue.
- Convert Stack into Queue.
- Monotonic Queue (sliding window maximum).

---

## 5. Hash Table (Core Data Structure)

- Applications: caching, DB indexing.
- Hash Table vs Array.
- Hash Table vs Hash Set.
- Time Complexity of operations.
- Hashing vs Encryption.
- Hash Functions – types.
- Popular Hashing Algorithms – SHA1, MD5, CRC32.
- Perfect Hash Function.
- Implementation with Collision Handling:
  - Chaining & separate chaining.
  - Open addressing (linear, quadratic probing, double hashing).
- Hash Collision resolution methods.
- Linear vs Quadratic Probing.
- Double Hashing – use cases.
- Load Factor & impact.
- Rehashing – resizing.
- Open vs Closed Hashing.
- Collision handling with linked list.
- Problems:
  - Remove duplicates from string.
  - Frequency of characters (e.g., "Mississippi").
  - First non-repeating character (e.g., "swiss").
  - Least occurred number.
  - Check duplicates in string.
  - Uncommon elements from 2 arrays.
  - **Two Sum (#1 LeetCode)** optimized O(n).
  - Valid Anagram (compare hash tables).

---

## 6. General Data Structure Problems

- Binary Search (recursion).
- Divide & Conquer (Merge Sort, Quick Sort).
- Backtracking (e.g., N-Queens).
- Sliding Window pattern.
- Common characters in two strings.
- Longest consecutive repeating characters.
- Second longest word in a sentence.
- First missing number in array.
- Maximum subarray sum (Kadane’s).
- String transformation: `"APPLE" → "A-pp-ppp-llll-eeeee"`.
- Move zeroes to end.
- Delete node in linked list.
- Role of head in linked list.
- Reverse array & elements.
- Remove duplicates from array in O(n).
- First character uppercase.
- Find duplicate students.
- Sort students by age.
- Jagged array.
- Fibonacci (first 10 elements).
- Tail vs Head recursion.
- Binary recursion.
- B-tree basics.
- Virtual memory.
- Memory allocation strategies.

---

## 7. Practice and Problem-Solving (Reinforcement)

- Practice **Blind 75 LeetCode** (use neetcode.io + YouTube solutions).
  - Valid Parentheses (#20).
  - Two Sum (#1).
  - Merge Two Sorted Lists (#21).
  - Valid Anagram.
- Mix of theory (5) + coding (5) questions.
- Learn syntax & debug on the go.
- Practice brute force vs optimal.
- Focus on **logic & understanding**, not memorizing.
- Read time complexity analysis.
- Work on optimization.
- Write clean, commented code.
- Read question carefully before coding.
- Improve logic + coding speed.
- Explore Node.js in structured way (apply DSA concepts).  
  """

with open("/mnt/data/DSA_Roadmap.md", "w") as f:
f.write(content)
