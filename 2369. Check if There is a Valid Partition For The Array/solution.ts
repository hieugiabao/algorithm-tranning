function validPartition(nums: number[]): boolean {
  const n = nums.length
  const memo = new Map<number, boolean>([[-1, true]])

  function prefixIsValid(i: number): boolean {
    if (memo.has(i)) return memo.get(i)!
    let ans = false

    if (i > 0 && nums[i] === nums[i - 1]) {
      ans ||= prefixIsValid(i - 2)
    }

    if (i > 1 && nums[i] === nums[i - 1] && nums[i] === nums[i - 2]) {
      ans ||= prefixIsValid(i - 3)
    }

    if (
      i > 1 &&
      nums[i] === nums[i - 1] + 1 &&
      nums[i - 1] === nums[i - 2] + 1
    ) {
      ans ||= prefixIsValid(i - 3)
    }

    memo.set(i, ans)

    return ans
  }

  return prefixIsValid(n - 1)
}

export { validPartition }
