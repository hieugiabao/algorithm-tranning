function findDifferentBinaryString(nums: string[]): string {
  const n = nums.length
  // mask is a bit mask that records the number of 1s in each binary string
  let mask = 0

  /*
    For each binary string, we use a bit mask to record the number of 1s in it.
    For example, if the i-th bit of mask is 1, then there are i 1s in the binary string.
    We use this bit mask to check if we can construct the answer with the i-th bit.
  */
  for (const num of nums) {
    let countOne = 0
    for (let i = 0; i < n; i++) {
      if (num[i] === '1') {
        countOne++
      }
    }

    mask |= 1 << countOne
  }

  for (let i = 0; i <= n; ++i) {
    // if the i-th bit is 0, then we can use it to construct the answer
    if (((mask >> i) & 1) === 0) {
      return '1'.repeat(i) + '0'.repeat(n - i)
    }
  }

  return ''
}

export { findDifferentBinaryString }
