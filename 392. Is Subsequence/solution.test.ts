import { isSubsequence } from './solution'

describe('392. Is Subsequence', () => {
  test('Example test case 1', () => {
    const s = 'abc'
    const t = 'ahbgdc'
    const output = true
    expect(isSubsequence(s, t)).toBe(output)
  })
  test('Example test case 2', () => {
    const s = 'axc'
    const t = 'ahbgdc'
    const output = false
    expect(isSubsequence(s, t)).toBe(output)
  })
})
