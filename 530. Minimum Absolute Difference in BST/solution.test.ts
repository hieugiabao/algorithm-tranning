import { getMinimumDifference } from './solution'

describe('530. Minimum Absolute Difference in BST', () => {
  test('Example test case 1', () => {
    /**
     * Input: root = [4,2,6,1,3]
     * Output: 1
     *
     *      4
     *     / \
     *    2   6
     *   / \
     *  1   3
     */
    const root = {
      val: 4,
      left: {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
      right: {
        val: 6,
        left: null,
        right: null,
      },
    }
    const output = 1
    expect(getMinimumDifference(root)).toBe(output)
  })

  test('Example test case 2', () => {
    /**
     * Input: root = [1,0,48,null,null,12,49]
     * Output: 1
     *
     *      1
     *     / \
     *    0   48
     *        / \
     *       12  49
     */
    const root = {
      val: 1,
      left: {
        val: 0,
        left: null,
        right: null,
      },
      right: {
        val: 48,
        left: {
          val: 12,
          left: null,
          right: null,
        },
        right: {
          val: 49,
          left: null,
          right: null,
        },
      },
    }
    const output = 1
    expect(getMinimumDifference(root)).toBe(output)
  })
})
