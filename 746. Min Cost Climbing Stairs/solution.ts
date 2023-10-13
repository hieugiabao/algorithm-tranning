/* eslint-disable camelcase */
function minCostClimbingStairs(cost: number[]): number {
  if (cost.length === 2) return Math.min(cost[0], cost[1])

  const dp = Array<number>(cost.length + 1).fill(0)

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  return dp[cost.length]
}

function minCostClimbingStairs_ConstantSpace(cost: number[]): number {
  let prev1 = 0
  let prev2 = 0

  for (let i = 2; i <= cost.length; i++) {
    const curr = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2])
    prev2 = prev1
    prev1 = curr
  }

  return prev1
}

export { minCostClimbingStairs, minCostClimbingStairs_ConstantSpace }
