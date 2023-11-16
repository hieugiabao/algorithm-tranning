import { findDifferentBinaryString } from './solution'

describe('1980. Find Unique Binary String', () => {
  test('Example test case 1', () => {
    const nums = ['01', '10']
    const expected = ['11', '00']
    const actual = findDifferentBinaryString(nums)
    expect(expected).toContain(actual)
  })
  test('Example test case 2', () => {
    const nums = ['00', '01']
    const expected = ['11', '10']
    const actual = findDifferentBinaryString(nums)
    expect(expected).toContain(actual)
  })
  test('Example test case 3', () => {
    const nums = ['111', '011', '001']
    const expected = ['101', '110', '000', '010', '100']
    const actual = findDifferentBinaryString(nums)
    expect(expected).toContain(actual)
  })
})
