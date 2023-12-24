# 1758. Minimum Changes To Make Alternating Binary String

[Problem link](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/)

<!-- Table of content -->
- [1758. Minimum Changes To Make Alternating Binary String](#1758-minimum-changes-to-make-alternating-binary-string)
  - [Description](#description)
    - [Example 1:](#example-1)
    - [Example 2:](#example-2)
    - [Example 3:](#example-3)
    - [Constraints:](#constraints)
  - [Solution](#solution)
    - [Idea](#idea)
    - [Python](#python)

## Description

You are given a string `s` consisting only of the characters `'0'` and `'1'`. In one operation, you can change any `'0'` to `'1'` or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string `"010"` is alternating, while the string `"0100"` is not.

Return _the **minimum** number of operations needed to make `s` alternating._

### Example 1:

> **Input:** s = "0100" <br />
> **Output:** 1 <br />
> **Explanation:** If you change the last character to '1', s will be "0101", which is alternating.

### Example 2:

> **Input:** s = "10" <br />
> **Output:** 0 <br />
> **Explanation:** s is already alternating.

### Example 3:

> **Input:** s = "1111" <br />
> **Output:** 2 <br />
> **Explanation:** You need two operations to reach "0101" or "1010".

### Constraints:

- <code>1 &lt;= s.length &lt;= 10<sup>4</sup></code>
- `s[i]` is either `'0'` or `'1'`.

## Solution

### Idea

- Count the number of `0` and `1` in the string
- If the number of `0` is greater than `1`, then the first character must be `0`
- If the number of `1` is greater than `0`, then the first character must be `1`
- If the number of `0` is equal to `1`, then the first character can be `0` or `1`
- Count the number of changes needed to make the string alternating
- Return the minimum number of changes

### Python

```python
class Solution:
    def minOperations(self, s: str) -> int:
        count_0 = 0
        count_1 = 0
        for i in range(len(s)):
            if i % 2 == 0:
                if s[i] == '1':
                    count_0 += 1
                else:
                    count_1 += 1
            else:
                if s[i] == '0':
                    count_0 += 1
                else:
                    count_1 += 1
        if count_0 > count_1:
            return count_1
        elif count_0 < count_1:
            return count_0
        else:
            return count_0
```