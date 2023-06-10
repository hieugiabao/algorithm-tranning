# 1802. Maximum Value at a Given Index in a Bounded Array

[Problem link](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/)

## Problem statement

You are given three positive integers `n`, `index`, and `maxSum`. You want to construct an array `nums` (**0-indexed**) that satisfies the following conditions:
- `nums.length == n`
- `nums[i]` is a **positive** integer where `0 <= i < n`.
- abs(`nums[i] - nums[i+1]`) <= 1 where `0 <= i < n-1`.
- The sum of all the elements of `nums` does not exceed `maxSum`.
- `nums[index]` is **maximized**.

Return `nums[index]` of the constructed array.
Note that `abs(x)` equals `x` if `x >= 0`, and `-x` otherwise.


**Example 1:**

```
Input: n = 4, index = 2,  maxSum = 6
Output: 2
Explanation: The arrays [1,1,2,1] and [1,2,2,1] satisfy all the conditions.
There are no arrays that satisfy all the conditions and have nums[2] == 3, so 2 is the maximum nums[2].
```

**Example 2:**

```
Input: n = 6, index = 1,  maxSum = 10
Output: 3
```

**Constraints:**

* `1 <= n <= maxSum <= 10^9`
* `0 <= index < n`


## Solution

After setting a value for `nums[index]`, let the numbers to its left decrease one from right to left until they reach `1`.  Similarly, the numbers to its right decrease one by one from left to right until they reach `1`. This way, we can ensure that the total sum of the array is minimized without violating the rules.

Next, we need to calculate the sum of the array, which is a purely mathematical problem. Let's take the numbers to the left of `nums[index]` as an example. There will be an arithmetic sequence to its left, and (possibly) a consecutive sequence of `1`s if `nums[index]` is less than the number of elements to the left. We need to determine the length of the arithmetic sequence based on the relative sizes of `index` and `value`.

The sum of an arithmetic sequence is `(a1 + an) * n / 2`, where `a1` is the first element, `an` is the last element, and `n` is the number of elements.

Take the following example:

* If `value <= index`: The sum of all elements on `index`'s left (including `nums[index]`) is made up by two parts:
  * The sum of arithmetic sequence `[1, 2, 3, ..., value - 1, value]`, which is `(value + 1) value / 2`.
  * The sum of `index - value` `1`s, which is `index - value`.

```
                              value
                       value-1 ___
                           ___|   |
                       ___|   |   |
                   ___|   |   |   |
   ___ ___ ___ ___|   |   |   |   |
  | 1 | 1 | 1 | 1 |   |   |   |   |
    0   1   2   3     ...     index
```

* Otherwise, it means there is only one arithmetic sequence on the left side of index, with the first item being `value` and the last item being `value - index`, so the sum of all elements on `index`'s left (including `nums[index]`) is:
  * The sum of arithmetic sequence `[value - index, ..., value - 1, value]`, which is `(value + value - index) * (index + 1) / 2`.

```
                      value
               value-1 ___
                   ___|   |
   value-index ___|   |   |
           ___|   |   |   |
          | 2 |   |   |   |
          |   |   |   |   |
            0   ...   index
```

Similarly, the right side of `nums[index]` is exactly the same. We need to determine the length of the arithmetic sequence and the length of the continuous sub-array of `1` based on the relative sizes of `n - index` and `value`.

* If `value <= n - index`: The sum of all elements on `index`'s right (including `nums[index]`) is made up by two parts:
  * The sum of arithmetic sequence `[value, value - 1, ..., 2, 1]`, which is `(value + 1) value / 2`.
  * The sum of `n - index - value` `1`s, which is `n - index - value`.

```
 value
  ___ value-1
 |   |___
 |   |   |___
 |   |   |   |___
 |   |   |   | 2 |___ ___ ___ ___
 |   |   |   |   | 1 | 1 | 1 | 1 |
 index        ...         n-2 n-1
```

* Otherwise, there is only an arithmetic sequence on the right side of index with the first term being `value` and the last term being `value - n + 1 + index`, so the sum of all elements on `index`'s right (including `nums[index]`) is:
  * The sum of arithmetic sequence `[value, value - 1, ..., value - n + 1 + index]`, which is `(value + value - n + 1 + index) * (n - index) / 2`.

```
 value
  ___ value-1
 |   |___
 |   |   |___ value-n+1+index
 |   |   |   |___
 |   |   |   |   |
 |   |   |   |   |
 index   ...  n-1
```

Don't forget that we have added the actual `value` at `index` twice, so we need to subtract the final sum by `value`.

```
left := 1
right := maxSum
for left < right {
    mid := (left + right + 1) / 2
    if getSum(mid) <= maxSum {
        left = mid
    } else {
        right = mid - 1
    }
}
return left
```

**Complexity Analysis**

* Time complexity: $O(\log (maxSum))$.
* Space complexity: $O(1)$.
