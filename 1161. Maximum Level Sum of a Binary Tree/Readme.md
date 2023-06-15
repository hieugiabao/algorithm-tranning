# 1161. Maximum Level Sum of a Binary Tree

[Problem link](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)

## Problem statement

Given the `root` of a binary tree, the level of its root is `1`, the level of its children is `2`, and so on.

Return the **smallest** level `x` such that the sum of all the values of nodes at level `x` is **maximal**.

**Example 1:**

![Example 1](../images/leetcode/1161/capture.jfif)

```
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation:
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
```

**Example 2:**

```
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-10^5 <= Node.val <= 10^5`


## Solution

### Approach 1: BFS

We can traverse the tree level by level using Breadth First Search (BFS). To do this, we put the root node into a queue. Then, we remove an element from the front of the queue, add its value to a running total for the current level, and add its children to the back of the queue. We repeat this process until the queue is empty.

To keep track of the current level, we'll use a variable called `level`. We'll also keep track of the maximum level sum we've seen so far in a variable called `max_sum`. Finally, we'll keep track of the level that corresponds to the maximum level sum in a variable called `max_level`.

**Algorithm**

1. Initialize a queue, `q`, with the root node and a level counter, `level`, with a value of `1`.
2. Initialize `max_sum` with a value of `-inf` and `max_level` with a value of `0`.
3. While `q` is not empty:
    1. Initialize `level_sum` with a value of `0`.
    2. Iterate over the current level of `q`:
        1. Remove the first node, `node`, from `q`.
        2. Add `node.val` to `level_sum`.
        3. Add `node`'s children to the back of `q`.
    3. If `level_sum` is greater than `max_sum`:
        1. Update `max_sum` with the value of `level_sum`.
        2. Update `max_level` with the value of `level`.
    4. Increment `level` by `1`.
4. Return `max_level`.

**Complexity Analysis**

* Time complexity : $O(n)$, where $n$ is the number of nodes in the tree. We visit each node once.
* Space complexity : $O(m)$, where $m$ is the maximum number of nodes in a given level of the tree. In the worst case, the tree is completely unbalanced, e.g. each node has only one child node, and the queue will contain all nodes in one level of the tree. For a full binary tree, the maximum width is $m = 2^{h-1}$, where $h$ is the height of the tree. Since $h \in O(n)$, we can say that the space complexity is $O(n)$.

### Approach 2: DFS

We can also traverse the tree level by level using Depth First Search (DFS). To do this, we'll use a recursive function called `dfs(node, level)`, where `node` is the current node we're visiting and `level` is the level of `node`. We'll call `dfs(root, 1)` to start the recursion.

**Algorithm**

1. Initialize `max_sum` with a value of `-inf` and `max_level` with a value of `0`.
2. Define a recursive function, `dfs(node, level)`, that takes a node and its level as arguments:
    1. If `node` is `null`, return.
    2. If `level` is greater than `max_level`:
        1. Update `max_level` with the value of `level`.
        2. Update `max_sum` with the value of `node.val`.
    3. Otherwise, add `node.val` to `max_sum`.
    4. Recursively call `dfs(node.left, level + 1)`.
    5. Recursively call `dfs(node.right, level + 1)`.
3. Call `dfs(root, 1)`.
4. Return `max_level`.
