import { eventualSafeNodes } from './solution'

describe('802. Find Eventual Safe States', () => {
  function test(graph: number[][], expected: number[]) {
    expect(eventualSafeNodes(graph)).toEqual(expected)
  }

  it('example 1', () => {
    test([[1, 2], [2, 3], [5], [0], [5], [], []], [2, 4, 5, 6])
  })

  it('example 2', () => {
    test([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []], [4])
  })
})
