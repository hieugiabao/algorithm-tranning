/**
 * The function `latestDayToCross` calculates the latest day on which it is possible to cross a grid of cells given the
 * number of rows, columns, and information about the cells that can be crossed on each day.
 * @param {number} row - The parameter `row` represents the number of rows in the grid.
 * @param {number} col - The parameter `col` represents the number of columns in the grid.
 * @param {number[][]} cells - The `cells` parameter is a 2D array of size `day` x 2. Each element in the array represents
 * the coordinates of a cell that can be crossed on a particular day. The first element of each subarray represents the row
 * number (0-indexed) and the second element
 * @returns The function `latestDayToCross` returns the maximum number of days it takes to cross a grid of cells.
 */
function latestDayToCross(row: number, col: number, cells: number[][]): number {
  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  /**
   * The function `canCross` checks if it is possible to cross a grid of cells within a given number of days.
   * @param {number} row - The number of rows in the grid.
   * @param {number} col - The parameter `col` represents the number of columns in the grid.
   * @param {number[][]} cells - The `cells` parameter is a 2D array of size `day` x 2. Each element in the array
   * represents the coordinates of a cell that can be crossed on a particular day. The first element of each subarray
   * represents the row number (0-indexed) and the second element
   * @param {number} day - The parameter `day` represents the number of days for which we have information about the cells.
   * @returns The function `canCross` returns a boolean value.
   */
  function canCross(
    row: number,
    col: number,
    cells: number[][],
    day: number
  ): boolean {
    // Create a grid of cells.
    // The value of each cell is 0 if it is not crossed yet. Otherwise, the value is -1. 1 represents a cell that can be crossed on the first day.
    const grid = Array.from({ length: row }, () =>
      Array.from({ length: col }, () => 0)
    )
    const queue: number[][] = []

    // Mark the cells that can be crossed on the first day.
    for (let i = 0; i < day; i++) {
      const [dx, dy] = cells[i]
      grid[dx - 1][dy - 1] = 1
    }

    // Mark the cells in the first row as -1.
    // These cells can be crossed on the first day.
    // Add these cells to the queue.
    // The queue will contain the cells that can be crossed on the first day.
    for (let i = 0; i < col; i++) {
      if (grid[0][i] === 0) {
        queue.push([0, i])
        grid[0][i] = -1
      }
    }

    // Perform BFS on the queue.
    // If we reach the last row, return true.
    // Otherwise, return false.
    while (queue.length) {
      const [r, c] = queue.shift()!
      if (r === row - 1) {
        return true
      }

      // Check the cells in the four directions.
      // If a cell is not crossed yet, mark it as -1 and add it to the queue.
      // The queue will contain the cells that can be crossed on the next day.
      for (const [dx, dy] of DIRECTIONS) {
        const newRow = r + dx
        const newCol = c + dy
        if (
          newRow >= 0 &&
          newRow < row &&
          newCol >= 0 &&
          newCol < col &&
          grid[newRow][newCol] === 0
        ) {
          grid[newRow][newCol] = -1
          queue.push([newRow, newCol])
        }
      }
    }

    return false
  }

  let left = 1
  let right = row * col

  // Perform binary search on the range [1, row * col].
  // If we can cross the grid of cells within a given number of days, we can also cross it within a larger number of days.
  // If we cannot cross the grid of cells within a given number of days, we cannot cross it within a smaller number of days.
  while (left < right) {
    const mid = right - Math.floor((right - left) / 2)
    if (canCross(row, col, cells, mid)) {
      left = mid
    } else {
      right = mid - 1
    }
  }

  return left
}

export { latestDayToCross }
