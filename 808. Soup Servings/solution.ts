/**
 * The `soupServings` function calculates the probability that person A will finish all the soup before person B, given the
 * total amount of soup in milliliters.
 * Use dynamic programming (Bottom-Up) to solve this problem
 * @param {number} n - The parameter `n` represents the amount of soup in milliliters.
 * @returns The function `soupServings` returns the probability that A takes the first serving when there are `n` servings
 * of soup.
 */
function soupServings(n: number): number {
  n = Math.ceil(n / 25) // 1 serving = 25 ml, so we can divide n by 25 to get the number of servings

  // If n is large enough, the probability is 1
  if (n >= 200) {
    return 1
  }

  // dp[i][j] represents the probability that A takes the first when A has i left and B has j left
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0))

  dp[0][0] = 0.5 // when A and B both have 0 left, the probability of A taking the first is 0.5
  for (let i = 1; i <= n; ++i) {
    dp[0][i] = 1.0 // when A has 0 left and B has i left, the probability of A taking the first is 1.0
    dp[i][0] = 0.0 // when A has i left and B has 0 left, the probability of A taking the first is 0.0
  }

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      // 0.25 is the probability of A taking 25 from A and B
      // when A has i left and B has j left, the probability of A taking the first is
      // 0.25 * (the probability of A has i - 4 left and B has j left +
      //         the probability of A has i - 3 left and B has j - 1 left +
      //         the probability of A has i - 2 left and B has j - 2 left +
      //         the probability of A has i - 1 left and B has j - 3 left)
      dp[i][j] =
        0.25 *
        (dp[Math.max(i - 4, 0)][j] +
          dp[Math.max(i - 3, 0)][j - 1] +
          dp[Math.max(i - 2, 0)][Math.max(j - 2, 0)] +
          dp[i - 1][Math.max(j - 3, 0)])
    }
  }

  // The probability of A taking the first when A and B both have n left
  return dp[n][n]
}

export { soupServings }
