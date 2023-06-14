import { TreeNode } from './TreeNode'

function getMinimumDifference(root: TreeNode | null): number {
  let prev = -Infinity
  let min = Infinity

  // In-order traversal
  // https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR)
  function traverse(node: TreeNode | null) {
    if (!node) return
    traverse(node.left)
    min = Math.min(min, node.val - prev)
    prev = node.val
    traverse(node.right)
  }

  traverse(root)
  return min
}

export { getMinimumDifference }
