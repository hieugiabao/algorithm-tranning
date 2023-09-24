/* eslint-disable camelcase */

function champagneTower(
  poured: number,
  query_row: number,
  query_glass: number
): number {
  const dp = new Array(101).fill(0).map(() => new Array(101).fill(0))

  // The first cup is poured full
  dp[0][0] = poured

  // The amount of champagne in the j-th glass of the i-th row will be
  for (let i = 0; i <= query_row; i++) {
    for (let j = 0; j <= i; j++) {
      const q = (dp[i][j] - 1.0) / 2.0
      if (q > 0) {
        dp[i + 1][j] += q
        dp[i + 1][j + 1] += q
      }
    }
  }
  return Math.min(1, dp[query_row][query_glass])
}

export { champagneTower }
