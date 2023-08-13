import { validPartition } from './solution'

describe('2369. Check if There is a Valid Partition For The Array', () => {
  test('Example 1', () => {
    expect(validPartition([4, 4, 4, 5, 6])).toBe(true)
  })

  test('Example 2', () => {
    expect(validPartition([1, 1, 1, 2])).toBe(false)
  })

  test('Example 3', () => {
    expect(validPartition([1, 2, 3, 4])).toBe(false)
  })

  test('Example 4', () => {
    expect(validPartition([1, 1, 1, 1, 1, 1])).toBe(true)
  })
})
