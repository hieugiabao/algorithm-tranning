/**
 * The function takes an array of numbers and returns an array of strings representing ranges of consecutive numbers in the
 * input array.
 * @param {number[]} nums - an array of numbers that we want to summarize into ranges.
 * @returns The function `summaryRanges` returns an array of strings, where each string represents a range of consecutive
 * numbers in the input array `nums`. If a range contains only one number, the string will only contain that number. If a
 * range contains more than one number, the string will contain the first and last number of the range separated by a "->"
 * symbol.
 */
function summaryRanges(nums: number[]): string[] {
  let left = 0
  let right = 0
  const result: string[] = []

  while (right < nums.length) {
    // must check if right + 1 exists
    while (right + 1 < nums.length && nums[right] + 1 === nums[right + 1]) {
      right++
    }

    if (left === right) {
      result.push(`${nums[left]}`)
    } else {
      result.push(`${nums[left]}->${nums[right]}`)
    }

    left = ++right
  }

  return result
}

export { summaryRanges }
