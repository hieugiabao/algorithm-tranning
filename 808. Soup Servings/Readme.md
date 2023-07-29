# 808. Soup Servings

## Description

There are two types of soup: **type A** and **type B**. Initially, we have `n` ml of each type of soup. There are four kinds of operations:

1. Serve **`100 `ml** of **soup A** and **`0` ml** of **soup B**,
2. Serve **`75 `ml** of **soup A** and **`25 `ml** of **soup B**,
3. Serve **`50 `ml** of **soup A** and **`50 `ml** of **soup B**, and
4. Serve **`25 `ml** of **soup A** and **`75 `ml** of **soup B**.

When we serve some soup, we give it to someone, and we no longer have it. Each turn, we will choose from the four operations with equal probability `0.25`. If the remaining volume of soup is not enough to complete the operation, we will serve as much as we can. We stop once we no longer have some quantity of **both** types of soup.

**Note** that we do not have an operation where all `100` ml's of **soup B** are used first.

Return _the probability that **soup A** will be empty first, plus half the probability that **A** and **B** become empty at the same time_. Answers within `10^-5` of the actual answer will be accepted.

### Example 1:

```
Input: n = 50
Output: 0.62500
Explanation: If we choose the first two operations, A will become empty first.
For the third operation, A and B will become empty at the same time. For the fourth operation, B will become empty first. So the total probability of A becoming empty first plus half the probability that A and B become empty at the same time, is 0.25 * (1 + 1 + 0.5 + 0) = 0.625.
```

### Example 2:

```
Input: n = 100
Output: 0.71875
```

### Constraints:

- `0 <= n <= 10^9`

## Solution

### Dynamic Programming

```java
class Solution {
    public double soupServings(int n) {
        if (n >= 5000) return 1.0;
        n = (n + 24) / 25;
        double[][] dp = new double[n + 1][n + 1];
        dp[0][0] = 0.5;
        for (int i = 1; i <= n; ++i) {
            dp[0][i] = 1.0;
            dp[i][0] = 0.0;
        }
        for (int i = 1; i <= n; ++i) {
            for (int j = 1; j <= n; ++j) {
                dp[i][j] = 0.25 * (dp[Math.max(i - 4, 0)][j] + dp[Math.max(i - 3, 0)][Math.max(j - 1, 0)] + dp[Math.max(i - 2, 0)][Math.max(j - 2, 0)] + dp[Math.max(i - 1, 0)][Math.max(j - 3, 0)]);
            }
        }
        return dp[n][n];
    }
}
```

### Complexity Analysis

- Time Complexity: $O(1)$. <br/>
  Let $\epsilon$ be the error tolerance, and $m_0$ be the first value such that $dp[m_0][m_0]>1−ϵ.$ <br/>
  We calculate $O(min(m,m_0)^2)=O(m_0^2)$ state of DP in $O(1)$ each, meaning the total time complexity is $O(m_0^2)$. <br/>
  We assume that $\epsilon$ to be constant. It implies that $m_0$ is constant, and the time complexity is $O(1)$. In our case, $\epsilon=10^{-5}$, and $m_0 \approx 200$.
- Space Complexity: $O(1)$.
