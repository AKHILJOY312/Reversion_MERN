//PostOrder (Left → Right → Root)

function preOrder(root) {
  const result = [];

  function dfs(node) {
    if (!node) return;

    result.push(node.val); // root
    dfs(node.left); // left
    dfs(node.right); // right
  }

  dfs(root);
  return result;
}
