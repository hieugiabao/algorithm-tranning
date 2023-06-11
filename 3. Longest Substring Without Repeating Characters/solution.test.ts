import { lengthOfLongestSubstring } from './solution'

describe('3. Longest Substring Without Repeating Characters', () => {
  test('Example 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })

  test('Example 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })

  test('Example 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })

  test('Empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
  })

  test('Single character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1)
  })
})
