# 228. Summary Ranges

[Problem link](https://leetcode.com/problems/summary-ranges/)

## Problem statement

You are given a **sorted unique** integer array `nums`.

A **range** `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return *the **smallest sorted** list of ranges that **cover all the numbers in the array exactly***. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a,b]` in the list should be output as:

- `"a->b"` if `a != b`
- `"a"` if `a == b`

**Example 1:**

```
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

**Example 2:**

```
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```

**Constrains:**

- `0 <= nums.length <= 20`
- `-2^31 <= nums[i] <= 2^31 - 1`
- All the values of `nums` are **unique**.
- `nums` is sorted in ascending order.


## Solution

### Intuition

The problem is to find the smallest sorted list of ranges that cover all the numbers in the array exactly. We can use two pointers to solve this problem.

### Algorithm

1. Initialize two pointers `left` and `right` to point to the first element of the array.
2. While `right` < `nums.length`:
    1. while `nums[right + 1]` - `nums[right]` == `1`, increment `right` by 1.
    2. Add the range `[nums[left], nums[right]]` to the result list.
    3. increment `right` by 1.
    4. set `left` to `right`.
3. Return the result list.

### Complexity Analysis

- Time complexity: $O(n)$, where n is the length of the input array.
- Space complexity: $O(1)$
