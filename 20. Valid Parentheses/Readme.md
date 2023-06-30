# 20. Valid Parentheses

[Problem link](https://leetcode.com/problems/valid-parentheses/)

## Description

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

```
Input: s = "()"
Output: true
```

**Example 2:**

```
Input: s = "()[]{}"
Output: true
```

**Example 3:**

```
Input: s = "(]"
Output: false
```

**Constraints:**

- `1 <= s.length <= 104`
- `s` consists of parentheses only `'()[]{}`.

## Solution

### Intuition

We can use a stack to store the parentheses. When we meet a left parentheses, we push it into the stack. When we meet a right parentheses, we pop the top element of the stack and check if it matches the right parentheses. If not, return false. If the stack is empty when we meet a right parentheses, return false. After we traverse the string, if the stack is not empty, return false.

### Algorithm

1. Initialize a stack.
2. Traverse the string, if the character is a left parentheses, push it into the stack.
3. If the character is a right parentheses, pop the top element of the stack and check if it matches the right parentheses. If not, return false. If the stack is empty when we meet a right parentheses, return false.
4. After we traverse the string, if the stack is not empty, return false. Otherwise, return true.

#### Complexity Analysis

- **Time Complexity:** $O(n)$, where n is the length of the string.
- **Space Complexity:** $O(n)$, where n is the length of the string.
