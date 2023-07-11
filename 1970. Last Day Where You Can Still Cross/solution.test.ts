import { latestDayToCross } from './solution'

describe('1970. Last Day Where You Can Still Cross', () => {
  test('Example test case 1', () => {
    const row = 2
    const col = 2
    const cells = [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2],
    ]
    const output = 2
    expect(latestDayToCross(row, col, cells)).toBe(output)
  })
  test('Example test case 2', () => {
    const row = 2
    const col = 2
    const cells = [
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
    ]
    const output = 1
    expect(latestDayToCross(row, col, cells)).toBe(output)
  })
  test('Example test case 3', () => {
    const row = 3
    const col = 3
    const cells = [
      [1, 2],
      [2, 1],
      [3, 3],
      [2, 2],
      [1, 1],
      [1, 3],
      [2, 3],
      [3, 2],
      [3, 1],
    ]
    const output = 3
    expect(latestDayToCross(row, col, cells)).toBe(output)
  })
})
