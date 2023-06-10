/**
 * The function calculates the sum of an arithmetic sequence with a given index, value, and length.
 * @param {number} index - The index of the element in the array for which we want to calculate the sum of the arithmetic
 * sequence.
 * @param {number} value - The value of the element at the given index in an arithmetic sequence.
 * @param {number} n - The total number of elements in the sequence.
 * @returns a number, which represents the sum of an arithmetic sequence of numbers based on the input parameters.
 */
function getSum(index: number, value: number, n: number): number {
  let count = 0

  // Count the number of elements to the left of the index
  // If value > index, there are index+1 numbers in the arithmetic sequence:
  // [value - index,..., value - 1, value]
  // Otherwise, there are value numbers in the arithmetic sequence:
  // [1, 2, ..., value - 1, value], plus a sequence of length(index - value + 1) of 1s
  if (value > index) {
    count += ((value - index + value) * (index + 1)) / 2
  } else {
    count += ((1 + value) * value) / 2 + (index - value + 1)
  }

  // Count the number of elements to the right of the index
  // If value >= n - index, there are n - index numbers in the arithmetic sequence:
  // [value, value - 1, ..., value - (n - index - 1)]
  // Otherwise, there are value numbers in the arithmetic sequence:
  // [value, value - 1, ..., 2, 1], plus a sequence of length(n - index - value) of 1s
  if (value >= n - index) {
    count += ((value + value - (n - index - 1)) * (n - index)) / 2
  } else {
    count += ((1 + value) * value) / 2 + (n - index - value)
  }

  // We have counted the index twice, so we need to subtract it once
  return count - value
}

/**
 * The function finds the maximum value that can be placed at a given index in an array of size n, given a maximum sum
 * constraint.
 * @param {number} n - The length of the array.
 * @param {number} index - The index of the element in the array for which we want to find the maximum value.
 * @param {number} maxSum - The maximum sum allowed for the array.
 * @returns a number, which is the maximum possible value that can be placed at the given index in an array of length n,
 * such that the sum of all elements in the array is less than or equal to maxSum.
 */
function maxValue(n: number, index: number, maxSum: number): number {
  let left = 1
  let right = maxSum
  let mid = 0

  while (left < right) {
    // We want to find the smallest value that satisfies the condition
    mid = Math.floor((left + right + 1) / 2)

    if (getSum(index, mid, n) <= maxSum) {
      left = mid
    } else {
      right = mid - 1
    }
  }

  return left
}

export default maxValue
