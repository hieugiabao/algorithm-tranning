# 1351. Count Negative Numbers in a Sorted Matrix

[Problem link](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/) <br/>
Given a `m * n` matrix `grid` which is sorted in **non-increasing order** both row-wise and column-wise.

Return the number of **negative** numbers in `grid`.

**Example 1:**

```
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
```

**Example 2:**

```
Input: grid = [[3,2],[1,0]]
Output: 0
Explanation: There are no negative numbers in the matrix.
```

**Example 3:**

```
Input: grid = [[1,-1],[-1,-1]]
Output: 3
Explanation: There are 3 negatives numbers in the matrix.
```

## Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 100`
- `-100 <= grid[i][j] <= 100`

## Solution

```
count = 0
for i = 0 to grid.length
  row = grid[i]
  for j = 0 to row.length
    if row[j] < 0
      count += row.length - j
      break
```

## Complexity

Time Complexity: `O(m*n)` <br/>
Space Complexity: `O(1)` <br/>

