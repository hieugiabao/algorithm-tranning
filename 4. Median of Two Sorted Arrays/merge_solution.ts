/**
 * The function returns the minimum value between two arrays and the indices of the next elements to be compared.
 * @param {number[]} nums1 - An array of numbers representing the first set of numbers.
 * @param {number[]} nums2 - An array of numbers that is one of the two arrays being compared to find the minimum value.
 * @param {number} p1 - The current index of the first array (nums1) being compared.
 * @param {number} p2 - p2 is a number representing the current index position in the nums2 array.
 * @returns an array with three elements: the minimum number between the two arrays at the current positions (p1 and p2),
 * and the updated values of p1 and p2.
 */
function getMin(
  nums1: number[],
  nums2: number[],
  p1: number,
  p2: number
): [number, number, number] {
  let minN = -1
  if (p1 < nums1.length && p2 < nums2.length) {
    minN = nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++]
  } else if (p1 < nums1.length) minN = nums1[p1++]
  else if (p2 < nums2.length) minN = nums2[p2++]
  return [minN, p1, p2]
}

/**
 * The function finds the median of two sorted arrays.
 * @param {number[]} nums1 - An array of numbers representing the first sorted array.
 * @param {number[]} nums2 - The second sorted array of numbers that will be used to find the median when combined with the
 * first sorted array (nums1).
 * @returns the median value of two sorted arrays, which can be a single number if the combined length of the arrays is
 * odd, or the average of two middle numbers if the combined length is even.
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length
  const n = nums2.length
  let p1 = 0
  let p2 = 0
  let m1 = 0
  let m2: number = 0

  if ((m + n) % 2 === 0) {
    for (let i = 0; i < Math.floor((m + n) / 2 - 1); i++) {
      ;[, p1, p2] = getMin(nums1, nums2, p1, p2)
    }
    ;[m1, p1, p2] = getMin(nums1, nums2, p1, p2)
    ;[m2] = getMin(nums1, nums2, p1, p2)
    return (m1 + m2) / 2
  } else {
    for (let i = 0; i < Math.floor((m + n) / 2); i++) {
      ;[, p1, p2] = getMin(nums1, nums2, p1, p2)
    }

    return getMin(nums1, nums2, p1, p2)[0]
  }
}
export { findMedianSortedArrays }
