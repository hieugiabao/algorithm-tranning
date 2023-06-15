import { TreeNode } from './TreeNode'

function dfs(
  root: TreeNode | null,
  level: number,
  levelSumMap: Map<number, number>
): void {
  if (root === null) {
    return
  }

  const sum = levelSumMap.get(level) ?? 0
  levelSumMap.set(level, sum + root.val)

  dfs(root.left, level + 1, levelSumMap)
  dfs(root.right, level + 1, levelSumMap)
}

function maxLevelSum(root: TreeNode | null): number {
  const levelSumMap = new Map<number, number>()
  dfs(root, 1, levelSumMap)

  let maxLevel = 1
  let maxSum = -Infinity
  for (const [level, sum] of levelSumMap.entries()) {
    if (sum > maxSum) {
      maxSum = sum
      maxLevel = level
    }
  }

  return maxLevel
}

export { maxLevelSum }
