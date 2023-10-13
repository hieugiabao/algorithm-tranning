/* eslint-disable camelcase */
import {
  minCostClimbingStairs,
  minCostClimbingStairs_ConstantSpace,
} from './solution'

describe('746. Min Cost Climbing Stairs', () => {
  describe('minCostClimbingStairs', () => {
    test('Example test case 1', () => {
      const cost = [10, 15, 20]
      const expected = 15
      const actual = minCostClimbingStairs(cost)
      expect(actual).toEqual(expected)
    })
    test('Example test case 2', () => {
      const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
      const expected = 6
      const actual = minCostClimbingStairs(cost)
      expect(actual).toEqual(expected)
    })

    test('cost.length === 2', () => {
      const cost = [1, 100]
      const expected = 1
      const actual = minCostClimbingStairs(cost)
      expect(actual).toEqual(expected)
    })
  })

  describe('minCostClimbingStairs_ConstantSpace', () => {
    test('Example test case 1', () => {
      const cost = [10, 15, 20]
      const expected = 15
      const actual = minCostClimbingStairs_ConstantSpace(cost)
      expect(actual).toEqual(expected)
    })
    test('Example test case 2', () => {
      const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
      const expected = 6
      const actual = minCostClimbingStairs(cost)
      expect(actual).toEqual(expected)
    })

    test('cost.length === 2', () => {
      const cost = [1, 100]
      const expected = 1
      const actual = minCostClimbingStairs_ConstantSpace(cost)
      expect(actual).toEqual(expected)
    })
  })
})
