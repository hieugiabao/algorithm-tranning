import { numOfWays } from './solution'

describe('1569. Number of Ways to Reorder Array to Get Same BST', () => {
  test('example 1', () => {
    expect(numOfWays([2, 1, 3])).toBe(1)
  })

  test('example 2', () => {
    expect(numOfWays([3, 4, 5, 1, 2])).toBe(5)
  })

  test('example 3', () => {
    expect(numOfWays([1, 2, 3])).toBe(0)
  })

  test('example 4', () => {
    expect(numOfWays([3, 1, 2, 5, 4, 6])).toBe(19)
  })

  test('example 5', () => {
    expect(
      numOfWays([9, 4, 2, 1, 3, 6, 5, 7, 8, 14, 11, 10, 12, 13, 16, 15, 17, 18])
    ).toBe(216212978)
  })

  test('private test case', () => {
    expect(
      numOfWays([
        10, 23, 12, 18, 4, 29, 2, 8, 41, 31, 25, 21, 14, 35, 26, 5, 19, 43, 22,
        37, 9, 20, 44, 28, 1, 39, 30, 38, 36, 6, 13, 16, 27, 17, 34, 7, 15, 3,
        11, 24, 42, 33, 40, 32,
      ])
    ).toBe(182440977)
  })
})
