/**
 * The function counts the number of pairs of rows and columns in a grid that have the same values.
 * @param {number[][]} grid - a 2D array of numbers representing a square grid. Each element in the grid is a number
 * between 1 and n, where n is the size of the grid. The function returns the number of pairs of rows and columns that have
 * the same elements in the same order.
 * @returns a number, which represents the count of pairs of rows and columns in the input grid that have the same values.
 */
function equalPairs(grid: number[][]): number {
  let count = 0
  const n = grid.length
  const rowCounter = new Map<string, number>()

  for (let i = 0; i < n; i++) {
    const rowKey = grid[i].join(',')
    // The row may be counted multiple times, so we need to keep track of the count
    rowCounter.set(rowKey, (rowCounter.get(rowKey) ?? 0) + 1)
  }

  for (let i = 0; i < n; i++) {
    const col = []
    for (let j = 0; j < n; j++) {
      col.push(grid[j][i])
    }
    const colKey = col.join(',')
    count += rowCounter.get(colKey) ?? 0
  }

  return count
}

export { equalPairs }
