import maxValue from './solution'

describe('1802. Maximum Value at a Given Index in a Bounded Array', () => {
  test('Case 1 (Example 1)', () => {
    const n = 4
    const index = 2
    const maxSum = 6

    const output = 2

    expect(maxValue(n, index, maxSum)).toEqual(output)
  })

  test('Case 2 (Example 2)', () => {
    const n = 6
    const index = 1
    const maxSum = 10

    const output = 3

    expect(maxValue(n, index, maxSum)).toEqual(output)
  })

  test('Case 3 (Private test case)', () => {
    const n = 3
    const index = 0
    const maxSum = 815094800

    const output = 271698267

    expect(maxValue(n, index, maxSum)).toEqual(output)
  })

  test('Case 4', () => {
    const n = 3
    const index = 2
    const maxSum = 10

    const output = 4

    expect(maxValue(n, index, maxSum)).toEqual(output)
  })
})
