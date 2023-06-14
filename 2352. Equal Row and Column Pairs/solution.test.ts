import { equalPairs } from './solution'

describe('2352. Equal Row and Column Pairs', () => {
  test('Example test case 1', () => {
    const grid = [
      [3, 2, 1],
      [1, 7, 6],
      [2, 7, 7],
    ]
    const expected = 1
    const actual = equalPairs(grid)
    expect(actual).toEqual(expected)
  })
  test('Example test case 2', () => {
    const grid = [
      [3, 1, 2, 2],
      [1, 4, 4, 5],
      [2, 4, 2, 2],
      [2, 4, 2, 2],
    ]
    const expected = 3
    const actual = equalPairs(grid)
    expect(actual).toEqual(expected)
  })
})
