/**
 * The function calculates the number of ways to make change for a given amount using a given set of coins.
 * @param {number} amount - The amount is the target amount of money that we want to make change for. It is a number
 * representing the total value of money.
 * @param {number[]} coins - An array of numbers representing the different coin denominations available.
 * @returns the number of ways to make change for the given amount using the given coins.
 */
function change(amount: number, coins: number[]): number {
  // dp[i] represents the number of ways to make change for amount i
  const dp: number[] = new Array(amount + 1).fill(0)
  dp[0] = 1 // There is only one way to make change for amount 0

  // For each coin, we calculate the number of ways to make change for each amount from 1 to amount
  // We do this by adding the number of ways to make change for amount - coin to the number of ways to make change for amount
  // For example, if we have coins [1, 2, 5] and amount 5, we calculate the number of ways to make change for amount 5
  // by adding the number of ways to make change for amount 4 to the number of ways to make change for amount 3
  // This is because we can make change for amount 5 by adding a coin of value 1 to the number of ways to make change for amount 4
  // or by adding a coin of value 2 to the number of ways to make change for amount 3
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]
    }
  }

  return dp[amount]
}

export { change }
