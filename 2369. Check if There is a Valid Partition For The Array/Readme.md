# 2369. Check if There is a Valid Partition For The Array

[Problem link](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/)

## Problem description

<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> of length <code>n</code>. You have to partition the array into one or more <strong>contiguous</strong> sub-arrays.</p>

<p>We call a partition of the array <b>valid</b> if each of the obtained sub-arrays satisfies <b>one</b> of the following conditions:</p>

<ol>
  <li>The sub-array consists of <strong>exactly</strong> <code>2</code> equals elements. For example, the sub array <code>[2,2]</code> is good.</li>
  <li>The sub-array consists of <strong>exactly</strong> <code>3</code> equals elements. For example, the sub array <code>[4,4,4]</code> is good.</li>
  <li>The sub-array consists of  <strong>exactly</strong> <code>3</code> consecutive increasing elements, that is, the difference between adjacent elements is <code>1</code>. For example, the sub-array <code>[3,4,5]</code> is good, but the sub-array ,<code>[1,3,5]</code> is not.</li>
</ol>

<p>Return <code>true</code> <em>if the array has <b>at least</b> one valid partition</em>. Otherwise, return <code>false</code>.</p>

### Example 1

<pre>
<b>Input:</b> nums = [4,4,4,5,6]
<b>Output:</b> true
<b>Explanation:</b> The array can be partitioned into the sub-arrays [4,4] and [4,5,6].
This partition is valid, so we return true.
</pre>

### Example 2

<pre>
<b>Input:</b> nums = [1,1,1,2]
<b>Output:</b> false
<b>Explanation:</b> There is no way to partition the array.
</pre>

### Constraints

<ul>
  <li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
  <li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>
