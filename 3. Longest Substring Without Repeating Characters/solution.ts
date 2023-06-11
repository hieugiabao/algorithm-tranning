/**
 * This function returns the length of the longest substring in a given string without repeating characters.
 * @param {string} s - The input string for which we want to find the length of the longest substring without repeating
 * characters.
 * @returns The function `lengthOfLongestSubstring` returns a number, which represents the length of the longest substring
 * without repeating characters in the input string `s`.
 */
function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>()
  let left = 0
  let right = 0
  let maxLen = 0

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right])
      right++
    } else {
      set.delete(s[left])
      left++
    }
    maxLen = Math.max(maxLen, right - left)
  }

  return maxLen
}

export { lengthOfLongestSubstring }
