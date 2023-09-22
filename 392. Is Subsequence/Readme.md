# 392. Is Subsequence

[Problem link](https://leetcode.com/problems/is-subsequence/)

## Problem statement

Given two strings `s` and `t`, return `true` _if_ `s` _is a **subsequence** of_ `t`_, or_ `false` _otherwise_.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

### Example 1:

> **Input:** s = "abc", t = "ahbgdc"
> **Output:** true

### Example 2:

> **Input:** s = "axc", t = "ahbgdc"
> **Output:** false

### Constraints:

- `0 <= s.length <= 100`
- <code>0 &lt;= t.length &lt;= 10<sup>4</sup></code>
- `s` and `t` consist only of lowercase English letters.

### Follow up:

- Suppose there are lots of incoming `s`, say <code>s1, s2, ..., s<sub>k</sub></code> where <code>k &gt;= 10<sup>9</sup></code>, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?

## Solution

### Idea

- **Follow-up**: If there are lots of incoming `s`, we can pre-process `t` to get a map of characters to their indices in `t`. Then, for each `s`, we can iterate through `t` starting at the index after the last character we matched in `t`. If we find a character in `s` that is not in `t`, we can return `false`. Otherwise, we can return `true` after we have matched all characters in `s`.
