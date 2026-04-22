function combinationSum(candidates, target) {
  const result = [];

  function backtrack(start, currentSum, currentCombination) {
    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }
    if (currentSum > target) return;

    for (let i = start; i < candidates.length; i++) {
      currentCombination.push(candidates[i]);
      backtrack(i, currentSum + candidates[i], currentCombination); // i, not i+1 (reuse allowed)
      currentCombination.pop(); // backtrack
    }
  }

  backtrack(0, 0, []);
  return result;
}
