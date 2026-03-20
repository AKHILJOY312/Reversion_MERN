//Inorder (Left → Root → Right)

function inOrder(root) {
  const result = [];

  function dfs(node) {
    if (!node) return;

    dfs(node.left); // left
    result.push(node.val); // root
    dfs(node.right); // right
  }

  dfs(root);
  return result;
}
