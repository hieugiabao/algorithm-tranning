import countNegatives from './improve'

describe('1351. Count Negative Numbers in a Sorted Matrix', () => {
  test('Example 1', () => {
    expect(
      countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
      ])
    ).toBe(8)
  })

  test('Example 2', () => {
    expect(
      countNegatives([
        [3, 2],
        [1, 0],
      ])
    ).toBe(0)
  })

  test('Example 3', () => {
    expect(
      countNegatives([
        [1, -1],
        [-1, -1],
      ])
    ).toBe(3)
  })
})
