import { summaryRanges } from './solution'

describe('228. Summary Ranges', () => {
  test('Example 1', () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7'])
  })

  test('Example 2', () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual([
      '0',
      '2->4',
      '6',
      '8->9',
    ])
  })

  test('Example 3', () => {
    expect(summaryRanges([])).toEqual([])
  })

  test('Example 4', () => {
    expect(summaryRanges([-1])).toEqual(['-1'])
  })

  test('Example 5', () => {
    expect(summaryRanges([0, 4])).toEqual(['0', '4'])
  })
})
