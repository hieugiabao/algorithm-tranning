# 3. Longest Substring Without Repeating Characters

[Problem link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Problem statement

Given a string `s`, find the length of the **longest substring** without repeating characters.

`Note:` **substring** is a contiguous non-empty sequence of characters within a string.

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.


## Solution

### Intuition

The problem is to find the longest substring without repeating characters. We can use a sliding window to solve this problem

### Algorithm

1. Initialize a set to store the characters in the sliding window
2. Initialize two pointers `left` and `right` to point to the start and end of the sliding window
3. Initialize a variable `max_len` to store the maximum length of the substring
4. Iterate through the string
    1. If the character at `right` is not in the set, add it to the set and increment `right`
    2. If the character at `right` is in the set, remove the character at `left` from the set and increment `left`
5. Update `max_len` with the maximum of `max_len` and `right - left`
6. Return `max_len`


### Complexity analysis

- Time complexity: $O(n)$
- Space complexity: $O(n)$
