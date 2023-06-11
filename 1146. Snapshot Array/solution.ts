class SnapshotArray {
  private snapId: number
  private snapshots: Map<number, number>[]

  constructor(length: number) {
    this.snapId = 0
    this.snapshots = new Array(length)
    for (let i = 0; i < length; i++) {
      this.snapshots[i] = new Map<number, number>([[0, 0]])
    }
  }

  set(index: number, val: number): void {
    this.snapshots[index].set(this.snapId, val)
  }

  snap(): number {
    return this.snapId++
  }

  get(index: number, snapId: number): number {
    let val = this.snapshots[index].get(snapId)
    while (val === undefined) {
      snapId--
      val = this.snapshots[index].get(snapId)
    }
    return val
  }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

export default SnapshotArray
// @lc code=end
