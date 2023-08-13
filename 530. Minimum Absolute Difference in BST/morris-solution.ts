import { TreeNode } from './TreeNode'

/**
 * The function `getMinimumDifference` calculates the minimum difference between any two nodes in a binary search tree.
 * The function uses the Morris Traversal algorithm to traverse the tree in O(n) time and O(1) space.
 * @param {TreeNode | null} root - The `root` parameter is the root node of a binary search tree (BST).
 * @returns The function `getMinimumDifference` returns a number, which represents the minimum difference between any two
 * nodes in a binary search tree.
 */
function getMinimumDifference(root: TreeNode | null): number {
  let min = Infinity // The minimum difference between any two nodes in a binary search tree.
  let prev = -Infinity // The value of the previous node in the binary search tree.
  let curr = root // The current node in the binary search tree.

  /*
   * The Morris Traversal algorithm is used to traverse the binary search tree in O(n) time and O(1) space.
   * https://en.wikipedia.org/wiki/Tree_traversal#Morris_in-order_traversal_using_threading
   */
  while (curr) {
    if (curr.left) {
      let predecessor = curr.left
      while (predecessor.right && predecessor.right !== curr) {
        predecessor = predecessor.right
      }
      if (!predecessor.right) {
        predecessor.right = curr
        curr = curr.left
      } else {
        predecessor.right = null
        min = Math.min(min, Math.abs(curr.val - prev))
        prev = curr.val
        curr = curr.right
      }
    } else {
      min = Math.min(min, Math.abs(curr.val - prev))
      prev = curr.val
      curr = curr.right
    }
  }
  return min
}

export { getMinimumDifference }
