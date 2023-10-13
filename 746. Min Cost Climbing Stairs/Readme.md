# 746. Min Cost Climbing Stairs

[Problem link](https://leetcode.com/problems/min-cost-climbing-stairs/)

## Problem statement

You are given an integer array `cost` where `cost[i]` is the cost of <code>i<sup>th</sup></code> step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index `0`, or the step with index `1`.

Return _the minimum cost to reach the top of the floor._

### Example 1:

> **Input**: <code>cost = [10,<u>15</u>,20]</code> <br /> **Output**: `15` <br /> **Explanation**: You will start at index 1. <br/> - Pay 15 and climb two steps to reach the top. <br/> The total cost is 15.

### Example 2:

> **Input**: <code>cost = [<u>1</u>,100,<u>1</u>,1,<u>1</u>,100,<u>1</u>,<u>1</u>,100,<u>1</u>]</code> <br /> **Output**: `6` <br /> **Explanation**: You will start at index 0. <br/> - Pay 1 and climb two steps to reach index 2. <br/> - Pay 1 and climb two steps to reach index 4. <br/> - Pay 1 and climb two steps to reach index 6. <br/> - Pay 1 and climb one step to reach index 7. <br/> - Pay 1 and climb two steps to reach index 9. <br/> - Pay 1 and climb two steps to reach the top. <br/> The total cost is 6.

### Constraints:

- `2 <= cost.length <= 1000`
- `0 <= cost[i] <= 999`

## 1. Approach

### Intuition

The problem can be solved using dynamic programming. The idea is to find the minimum cost to reach the top of the floor from the bottom. The minimum cost to reach the top of the floor from the bottom is the minimum cost to reach the top of the floor from the bottom of the floor minus the cost of the current step. The minimum cost to reach the top of the floor from the bottom of the floor is the minimum cost to reach the top of the floor from the bottom of the floor minus the cost of the current step.

### Algorithm

1. Initialize an array `dp` of size `cost.length + 1` with `dp[0] = dp[1] = 0`.
2. Iterate over `cost` from index `2` to `cost.length`:
   1. Set `dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])`.
3. Return `dp[cost.length]`.

### Complexity analysis

- Time complexity: $O(n)$
- Space complexity: $O(n)$
