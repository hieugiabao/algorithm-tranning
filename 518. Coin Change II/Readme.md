# 518. Coin Change II

[Problem link](https://leetcode.com/problems/coin-change-ii/)

## Problem description

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return _the number of combinations that make up that amount_. If that amount of money cannot be made up by any combination of the coins, return `0`.

You may assume that you have an infinite number of each kind of coin.

The answer is **guaranteed** to fit into a signed **32-bit** integer.

### Example 1:

```
Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```

### Example 2:

```
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
```

### Example 3:

```
Input: amount = 10, coins = [10]
Output: 1
```

### Constraints:

- `1 <= coins.length <= 300`
- `1 <= coins[i] <= 5000`
- All the values of `coins` are **unique**.
- `0 <= amount <= 5000`

## Solution

### Intuition

This is a classic knapsack problem. The only difference is that we are asked to count the number of combinations instead of the number of permutations. Therefore, we need to make sure that the order of the coins does not matter.

### Algorithm

We can use a 2D array `dp` to store the number of combinations. `dp[i][j]` represents the number of combinations that can make up `j` amount of money using the first `i` coins. The result is `dp[coins.length][amount]`.

For each coin, we can either use it or not use it. If we use it, we need to find the number of combinations that can make up `j - coin` amount of money using the first `i` coins. If we do not use it, we need to find the number of combinations that can make up `j` amount of money using the first `i - 1` coins.

Therefore, the recurrence relation is:

```
dp[i][j] = dp[i][j - coin] + dp[i - 1][j]
```

### Complexity analysis

- Time complexity: $O(n * m)$, where n is the number of coins and m is the amount of money.
- Space complexity: $O(n * m)$, where n is the number of coins and m is the amount of money.
