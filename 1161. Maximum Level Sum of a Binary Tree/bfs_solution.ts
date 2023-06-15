import { TreeNode } from './TreeNode'

/**
 * The function returns the level with the maximum sum of values in a binary tree.
 * Using BFS.
 * @param {TreeNode | null} root - The root node of a binary tree.
 * @returns the level of the binary tree that has the maximum sum of node values.
 */
function maxLevelSum(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }

  let maxSum = root.val
  let maxLevel = 1
  let level = 1
  const queue: TreeNode[] = [root]

  while (queue.length > 0) {
    const size = queue.length
    let sum = 0

    for (let i = 0; i < size; ++i) {
      const node = queue.shift()!

      sum += node.val

      if (node.left !== null) {
        queue.push(node.left)
      }

      if (node.right !== null) {
        queue.push(node.right)
      }
    }

    if (sum > maxSum) {
      maxSum = sum
      maxLevel = level
    }

    level += 1
  }

  return maxLevel
}

export { maxLevelSum }
