/**
 * The function `numOfWays` calculates the number of ways to construct a binary search tree using the numbers in the given
 * array.
 * @param {number[]} nums - The `nums` parameter is an array of numbers.
 * @returns The function `numOfWays` returns the number of ways to construct a binary search tree using the given array of
 * numbers.
 */
function numOfWays(nums: number[]): number {
  const MOD = BigInt(10 ** 9 + 7)
  const table: number[][] = []

  for (let i = 0; i <= nums.length; i++) {
    table[i] = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        table[i][j] = 1
      } else {
        const a = table[i - 1][j - 1] ?? 0
        const b = table[i - 1][j] ?? 0
        table[i][j] = (a + b) % Number(MOD)
      }
    }
  }

  /**
   * The function `count` takes an array of numbers as input and calculates the number of ways to construct a binary search
   * tree using the numbers in the array.
   * @param {number[]} nums - The `nums` parameter is an array of numbers.
   * @returns the number of ways to construct a binary search tree using the given array of numbers.
   */
  function count(nums: number[]): bigint {
    if (nums.length <= 2) {
      return 1n
    }

    const root = nums[0]
    const left = nums.filter((n) => n < root)
    const right = nums.filter((n) => n > root)

    const leftCount = count(left) % MOD
    const rightCount = count(right) % MOD

    return (
      (((leftCount * rightCount) % MOD) *
        // BigInt(comb(nums.length - 1, left.length))) %
        BigInt(table[nums.length - 1][left.length])) %
      MOD
    )
  }

  return Number((count(nums) - 1n) % MOD)
}

/**
 * The function calculates the value of the binomial coefficient C(n, k) using recursion.
 * @param {number} n - The parameter `n` represents the total number of items or elements available.
 * @param {number} k - The parameter `k` represents the number of items to choose from the set of `n` items.
 * @returns the value of the binomial coefficient C(n, k), which represents the number of ways to choose k items from a set
 * of n items.
 */
function comb(n: number, k: number): number {
  function productRange(start: number, end: number): number {
    let prd = start
    let i = start

    while (i++ < end) {
      prd *= i
    }
    return prd
  }

  if (k === 0 || k === n) {
    return 1
  }

  k = k < n - k ? n - k : k
  return productRange(k + 1, n) / productRange(1, n - k)
}

export { numOfWays }
