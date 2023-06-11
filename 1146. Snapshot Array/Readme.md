# 1146. Snapshot Array

[Problem link](https://leetcode.com/problems/snapshot-array/)

## Problem statement

Implement a SnapshotArray that supports the following interface:

- `SnapshotArray(int length)` initializes an array-like data structure with the given length.  **Initially, each element equals `0`**.
- `void set(index, val)` sets the element at the given `index` to be equal to `val`.
- `int snap()` takes a snapshot of the array and returns the `snap_id`: the total number of times we called `snap()` minus `1`.
- `int get(index, snap_id)` returns the value at the given `index`, at the time we took the snapshot with the given `snap_id`


**Example 1:**

```
Input: ["SnapshotArray","set","snap","set","get"]
[[3],[0,5],[],[0,6],[0,0]]
Output: [null,null,0,null,5]
Explanation:
SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
snapshotArr.set(0,5);  // Set array[0] = 5
snapshotArr.snap();  // Take a snapshot, return snap_id = 0
snapshotArr.set(0,6);
snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5
```

**Constraints:**

- `1 <= length <= 50000`
- `0 <= index < length`
- `0 <= val <= 10^9`
- `0 <= snap_id < (the total number of times we call snap())`
- At most `5 * 10^4` calls will be made to `set`, `snap`, and `get`.


## Solution

The solution is to use a `Map` for each element of the array, where the keys are the snapshot IDs and the values are the values of the element at that snapshot. The `snap` method just increments the snapshot ID and returns it. The `set` method just sets the value of the element at the current snapshot ID. The `get` method just gets the value of the element at the given snapshot ID, or the closest previous snapshot ID if the given snapshot ID is not found.

On value lookup we start scanning list elements starting from the passed snapshot_id back to 0. Return first value for the index that we found - this means the most recent change up to this snapshot_id. If we haven't found anything it means there were no changes and we can return initial value which is 0 for all elements.

## Complexity

- Time complexity:
  - `SnapshotArray` constructor: $O(n)$
  - In the worst case, `set` and `get` methods are $O(n)$ because we have to scan the list of snapshots for the given index
  - `snap` method is $O(1)$
  - For each call to `get(index, snap_id)` we have to scan the list of snapshots for the given index, so the total time complexity is $O(n)$
  - `set(index, val)` appends a pair to the historical record of `nums[index]`, which takes $O(1)$ time
- Space complexity: O(n)
