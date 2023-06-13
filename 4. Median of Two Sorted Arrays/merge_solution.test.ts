import { findMedianSortedArrays } from './merge_solution'

describe('4. Median of Two Sorted Arrays (Merge solution)', () => {
  test('Example test case 1', () => {
    const nums1 = [1, 3]
    const nums2 = [2]
    const expected = 2
    const result = findMedianSortedArrays(nums1, nums2)
    expect(result).toBe(expected)
  })

  test('Example test case 2', () => {
    const nums1 = [1, 2]
    const nums2 = [3, 4]
    const expected = 2.5
    const result = findMedianSortedArrays(nums1, nums2)
    expect(result).toBe(expected)
  })

  test('Example test case 3', () => {
    const nums1 = [0, 0]
    const nums2 = [0, 0]
    const expected = 0
    const result = findMedianSortedArrays(nums1, nums2)
    expect(result).toBe(expected)
  })

  test('Example test case 4', () => {
    const nums1: number[] = []
    const nums2 = [1]
    const expected = 1
    const result = findMedianSortedArrays(nums1, nums2)
    expect(result).toBe(expected)
  })

  test('Example test case 5', () => {
    const nums1 = [2]
    const nums2: number[] = []
    const expected = 2
    const result = findMedianSortedArrays(nums1, nums2)
    expect(result).toBe(expected)
  })
})
