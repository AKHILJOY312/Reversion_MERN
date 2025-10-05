// Definition for a binary tree node (LeetCode format)
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
  if (!inorder || !postorder || inorder.length !== postorder.length)
    return null;
  const n = inorder.length;
  const inIndex = new Map();
  for (let i = 0; i < n; i++) inIndex.set(inorder[i], i);

  let postIdx = n - 1;

  function helper(inLeft, inRight) {
    if (inLeft > inRight) return null;
    const rootVal = postorder[postIdx--];
    const root = new TreeNode(rootVal);
    const mid = inIndex.get(rootVal);

    // build right first
    root.right = helper(mid + 1, inRight);
    root.left = helper(inLeft, mid - 1);
    return root;
  }

  return helper(0, n - 1);
}
