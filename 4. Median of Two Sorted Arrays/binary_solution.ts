/**
 * The function finds the median of two sorted arrays.
 * Solution here: https://www.youtube.com/watch?v=LPFhl65R7ww
 * @param {number[]} nums1 - An array of sorted numbers.
 * @param {number[]} nums2 - An array of numbers representing the second sorted array.
 * @returns a number, which is the median of the two sorted arrays passed as arguments.
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length
  const n = nums2.length

  if (m > n) {
    return findMedianSortedArrays(nums2, nums1)
  } // to ensure m <= n

  let iMin = 0
  let iMax = m
  const halfLen = Math.floor((m + n + 1) / 2)

  while (iMin <= iMax) {
    const i = Math.floor((iMin + iMax) / 2) // i is the middle of elements from nums1
    const j = halfLen - i
    if (i < iMax && nums2[j - 1] > nums1[i]) {
      iMin = i + 1 // i is too small
    } else if (i > iMin && nums1[i - 1] > nums2[j]) {
      iMax = i - 1 // i is too big
    } else {
      // i is perfect
      let maxLeft = 0
      if (i === 0) {
        maxLeft = nums2[j - 1]
      } else if (j === 0) {
        maxLeft = nums1[i - 1]
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1])
      }
      if ((m + n) % 2 === 1) {
        return maxLeft
      }

      let minRight = 0
      if (i === m) {
        minRight = nums2[j]
      } else if (j === n) {
        minRight = nums1[i]
      } else {
        minRight = Math.min(nums2[j], nums1[i])
      }

      return (maxLeft + minRight) / 2
    }
  }

  return 0
}

export { findMedianSortedArrays }
