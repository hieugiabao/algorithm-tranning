function countNegatives(grid: number[][]): number {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i]
    for (let j = 0; j < row.length; j++) {
      if (row[j] < 0) {
        count += row.length - j
        break
      }
    }
  }
  return count
}

export default countNegatives
