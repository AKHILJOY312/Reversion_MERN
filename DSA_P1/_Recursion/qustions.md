# Recursion & Backtracking Problems

---

## 1. Generate All Valid Parentheses

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

**Example**  
`n = 3 → ["((()))", "(()())", "(())()", "()(())", "()()()"]`

🔍 Hint: Use DFS/backtracking with open/close count.

---

## 2. Subset Sum / All Subsets

Given an array of distinct integers, return all possible subsets (the power set).

**Example**  
`[1,2,3] → [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]`

🔍 Classic backtracking pattern. Can be extended to “subsets with duplicates” or “k-sized subsets”.

---

## 3. Combination Sum

Given an array of distinct integers `candidates` and a target integer `target`, return all unique combinations where chosen numbers sum to target.

**Example**  
`candidates = [2,3,6,7], target = 7 → [[7], [2,2,3]]`

🔍 Backtracking with repetition allowed. Avoid duplicates by only moving forward in candidates.

---

## 4. Word Search (Board)

Given an `m x n` grid of characters and a string word, return true if word exists in the grid.

- Word must be constructed from sequentially adjacent cells (up/down/left/right).
- Each cell can be used only once.

🔍 DFS + backtracking on 2D grid. Mark visited, unmark on backtrack.

---

## ⚡ 5. N-Queens

Place `n` queens on an `n×n` chessboard so that no two queens attack each other.

Return all distinct solutions.

🔍 Backtracking with constraint checking. Use arrays to track columns, diagonals.

---

## 6. Decode Ways II (LeetCode 639)

A message containing letters from A-Z is encoded as numbers:  
`'A' → "1", ..., 'Z' → "26"`

But now some digits are replaced with `*` which can be any digit `1–9`.  
Count number of ways to decode the string.

**Example**

```js
"*"   → 9 ways (1..9)
"1*"  → 18 ways (11..19) + 6 more (21–26)
```

🔍 Recursive DP with memoization. Many edge cases: leading zero, `*` handling, `10/20` vs `1/0`.

---

## 7. Regular Expression Matching with Recursion

Implement wildcard matching with:

- `.` matches any char
- `*` matches zero or more of preceding char

Do NOT use built-in regex engines. Implement recursion + memoization.

**Examples**

```js
s = "aa", p = "a*"      → true
s = "ab", p = ".*"      → true
s = "aab", p = "c*a*b"  → true
```

🔍 Classic DP/recursion problem. Handle `*` as: match 0 times or match 1+ times.

---

## 8. Knight Probability on Chessboard

A knight starts at `(row, col)` on an `n x n` board. It makes exactly `k` moves randomly.

Return the probability that the knight remains on the board after `k` moves.

🔍 Recursion with memoization. State = `(r, c, k)`.  
Base case: off-board → 0, `k=0` → 1.

---

## 9. Tiling a 2×N Board with Dominoes and Trominoes

You have two types of tiles: domino (2x1) and tromino (L-shaped, covers 3 squares).

Count number of ways to tile a `2×n` board.

🔍 State machine recursion: `dp[n][state]`. States: full, top gap, bottom gap. Tricky recurrence!

---

## 10. Longest Increasing Path in a Matrix

Given an `m x n` matrix, find the length of the longest increasing path (moving in 4 directions).

Each cell can only be visited once per path.

**Example**

```js
[[9,9,4],
 [6,6,8],
 [2,1,1]] → 4 (path: 1→2→6→9)
```

🔍 DFS + Memoization. No need for visited set — just rely on increasing condition.

---

## 💡 Bonus: Advanced Pattern Questions

### 11. Parenthesis Generator with Constraints

Generate all valid parentheses sequences of length `2n`, but with additional constraints:

- At no point should the number of closing brackets exceed opening brackets.
- Given a prefix like `"(()"` — generate all completions.

🔍 Variation of Q1 — adds state tracking.

---

### 12. Count Number of Ways to Reach nth Stair

You can climb 1, 2, or 3 steps at a time.  
But you cannot take 3 steps twice in a row.

Find number of ways to reach step `n`.

🔍 Requires state: last move was 3? Use recursion with memo: `f(n, lastWas3)`.

---

### 13. Minimum Cost to Cut a Stick

You’re given a stick of length `n` and an array `cuts` representing positions where you can cut.

- Cost of cutting = length of current stick.
- Minimize total cost.

**Example**

```js
(n = 7), (cuts = [1, 3, 4, 5]);
// Optimal order: 3, then 1, then 4, then 5 → minimize cumulative cost
```

🔍 Classic interval DP with recursion: try every cut as first, recurse on left/right segments.

---

### 14. Sudoku Solver

Write a program to solve a Sudoku puzzle by filling the empty cells.

🔍 Backtracking with constraint propagation. For each empty cell, try digits 1–9, check validity recursively.

---

### 15. Wildfire Spread (Grid Simulation)

A grid has:

- trees (1),
- fire (2),
- empty (0).

Fire spreads to 4 neighbors each minute.  
Trees catch fire if adjacent to fire.

Find how many minutes until the entire forest burns. If impossible, return `-1`.

🔍 Multi-source BFS is better, but recursive DFS with simulation is possible — tricky due to dependency order.

---

## ✅ Pro Tips for Recursion Interviews

- Always define base cases clearly  
  ⚠️ Missing base case → infinite recursion → stack overflow
- Use memoization for overlapping subproblems  
  👉 Especially for DP problems like Fibonacci, Coin Change, etc.
- Avoid mutating shared state without backtracking  
  👉 E.g., in subset generation or N-Queens, always undo changes
- Think in terms of **“what does this function return?”**  
  👉 Don’t get lost in implementation details — focus on the contract
- Draw recursion tree  
  👉 Helps visualize branching and identify overlaps
