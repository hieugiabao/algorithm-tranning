/**
 * The function counts the number of negative integers in a 2D grid.
 * @param {number[][]} grid - a 2D array of numbers representing a grid of integers. Each element in the grid can be
 * positive, negative, or zero.
 * @returns the total number of negative integers in a 2D grid.
 */
function countNegatives(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length

  let negatives = 0
  let col = 0

  for (let row = m - 1; row >= 0; row--) {
    while (col < n && grid[row][col] >= 0) {
      col++
    }

    negatives += n - col
  }

  return negatives
}

export default countNegatives
