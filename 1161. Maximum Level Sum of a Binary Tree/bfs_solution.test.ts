import { maxLevelSum } from './bfs_solution'

describe('1161. Maximum Level Sum of a Binary Tree (Using BFS)', () => {
  test('Case 1', () => {
    /**
     * Input: root = [1,7,0,7,-8,null,null]
     * Output: 2
     *      1
     *     / \
     *    7   0
     *   / \
     *  7  -8
     */
    const root = {
      val: 1,
      left: {
        val: 7,
        left: {
          val: 7,
          left: null,
          right: null,
        },
        right: {
          val: -8,
          left: null,
          right: null,
        },
      },
      right: {
        val: 0,
        left: null,
        right: null,
      },
    }

    expect(maxLevelSum(root)).toBe(2)
  })

  test('Case 2', () => {
    /**
     * Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
     * Output: 2
     *       989
     *         \
     *       10250
     *       /    \
     *    98693  -89388
     *              \
     *            -32127
     */
    const root = {
      val: 989,
      left: null,
      right: {
        val: 10250,
        left: {
          val: 98693,
          left: null,
          right: null,
        },
        right: {
          val: -89388,
          left: null,
          right: {
            val: -32127,
            left: null,
            right: null,
          },
        },
      },
    }

    expect(maxLevelSum(root)).toBe(2)
  })
})
