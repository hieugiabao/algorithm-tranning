import countNegatives from './app'

describe('1351. Count Negative Numbers in a Sorted Matrix', () => {
  it('example 1', () => {
    expect(
      countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
      ])
    ).toBe(8)
  })

  it('example 2', () => {
    expect(
      countNegatives([
        [3, 2],
        [1, 0],
      ])
    ).toBe(0)
  })

  it('example 3', () => {
    expect(
      countNegatives([
        [1, -1],
        [-1, -1],
      ])
    ).toBe(3)
  })

  it('example 4', () => {
    expect(countNegatives([[-1]])).toBe(1)
  })
})
