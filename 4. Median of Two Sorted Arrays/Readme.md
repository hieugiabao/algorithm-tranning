# 4. Median of Two Sorted Arrays

[Problem link](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Problem statement

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

> _The median_ is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

**Note**: The overall run time complexity should be `O(log (m+n))`.

### Example 1:

> **Input**: nums1 = `[1,3]`, nums2 = `[2]` <br /> **Output**: `2.00000` <br /> **Explanation**: merged array = `[1,2,3]` and median is `2`.

### Example 2:

> **Input**: nums1 = `[1,2]`, nums2 = `[3,4]` <br /> **Output**: `2.50000` <br /> **Explanation**: merged array = `[1,2,3,4]` and median is `(2 + 3) / 2 = 2.5`.

### Constraints:

- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- <code>-10<sup>6</sup> <= nums1[i], nums2[i] <= 10<sup>6</sup></code>

## Solution explanation

### Approach 1: Merge and sort

#### Intuition

A simple solution would be to merge both arrays into one and then sort it. The median would be the middle element or the average of the two middle elements.

### Approach 2: Two pointers

#### Intuition

The previous approach is straightforward but not optimal. We don't need to merge both arrays to find the median. We can use two pointers to iterate over both arrays and find the median.

#### Algorithm

- Initialize two pointers `i` and `j` to point to the start of both arrays.
- Initialize two variables `m1` and `m2` to store the previous value of `m1`.
- Iterate over both arrays until we reach the middle element.
  - If `nums1[i] < nums2[j]`, then `m1 = nums1[i]` and `i++`.
  - Else, `m1 = nums2[j]` and `j++`.
  - `m2 = m1`.
  - Repeat the same steps until we reach the middle element.
- If the total number of elements is odd, then `m1` is the median.
- Else, the median is `(m1 + m2) / 2`.
- Return the median.

#### Complexity analysis

- Time complexity: $O(m + n)$
- Space complexity: $O(1)$

### Approach 3: Binary search

#### Intuition

The previous approach is optimal but not optimal enough. We can use binary search to find the median in $O(log(m + n))$ time.

#### Algorithm

- Initialize two pointers `i` and `j` to point to the start and end of both arrays.
- Initialize two variables `m1` and `m2` to store the previous value of `m1`.
- Iterate over both arrays until we reach the middle element.
  - Calculate the middle index of both arrays.
  - If `nums1[i] < nums2[j]`, then `m1 = nums1[i]` and `i = mid1 + 1`.
  - Else, `m1 = nums2[j]` and `j = mid2 + 1`.
  - `m2 = m1`.
  - Repeat the same steps until we reach the middle element.
- If the total number of elements is odd, then `m1` is the median.
- Else, the median is `(m1 + m2) / 2`.
- Return the median.

#### Complexity analysis

- Time complexity: $O(log(m + n))$
- Space complexity: $O(1)$
