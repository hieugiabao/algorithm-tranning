import SnapshotArray from './solution'

describe('1146. Snapshot Array', () => {
  test('Case 1 (Example 1)', () => {
    const snapshotArr = new SnapshotArray(3) // set the length to be 3
    snapshotArr.set(0, 5) // Set array[0] = 5
    expect(snapshotArr.snap()).toBe(0) // Take a snapshot, return snap_id = 0
    snapshotArr.set(0, 6)
    expect(snapshotArr.get(0, 0)).toBe(5) // Get the value of array[0] with snap_id = 0, return 5
  })

  test('Case 2 (Private test case)', () => {
    const snapshotArr = new SnapshotArray(1)
    snapshotArr.set(0, 15)
    expect(snapshotArr.snap()).toBe(0)
    expect(snapshotArr.snap()).toBe(1)
    expect(snapshotArr.snap()).toBe(2)
    expect(snapshotArr.get(0, 2)).toBe(15)
    expect(snapshotArr.snap()).toBe(3)
    expect(snapshotArr.snap()).toBe(4)
    expect(snapshotArr.get(0, 0)).toBe(15)
  })

  test('Case 3 (Private test case)', () => {
    const snapshotArr = new SnapshotArray(2)
    snapshotArr.set(0, 12)
    expect(snapshotArr.snap()).toBe(0)
    expect(snapshotArr.snap()).toBe(1)
    expect(snapshotArr.get(1, 0)).toBe(0)
    expect(snapshotArr.get(1, 0)).toBe(0)
    expect(snapshotArr.snap()).toBe(2)
    expect(snapshotArr.snap()).toBe(3)
  })
})
