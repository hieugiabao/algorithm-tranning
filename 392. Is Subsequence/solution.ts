/* eslint-disable camelcase */
function isSubsequence(s: string, t: string): boolean {
  let i = 0 // index of s
  let j = 0 // index of t

  /**
   * Iterate through both strings, incrementing i only when
   * the current character of s is found in t.
   */
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++
    j++
  }
  return i === s.length
}

/**
 * Follow up question:
 *
 * @param s     The string to search for subsequences in.
 * @param words The list of words to search for in s.
 * @returns     The number of words that are subsequences of s.
 * @see https://leetcode.com/problems/number-of-matching-subsequences/
 *
 * @example
 * Input: s = "abcde", words = ["a","bb","acd","ace"]
 * Output: 3
 * Explanation: There are three strings in words that are a subsequence of s: "a",
 * "acd", "ace".
 *
 */
function numMatchingSubsequence(s: string, words: string[]): number {
  /**
   * @dev Check if word is a subsequence of s.
   * @dev This is the same as isSubsequence() above, but with a map of characters
   *     to their indices in s.
   * @dev This is a helper function for numMatchingSubsequence().
   *
   * @param word The word to check if it is a subsequence of s.
   * @param s    The string to search for subsequences in.
   * @param map  A map of characters to their indices in s.
   * @returns    True if word is a subsequence of s, false otherwise.
   */
  const isSubsequence = (
    word: string,
    s: string,
    map: Map<string, number[]>
  ): boolean => {
    let i = 0 // index of word
    let j = 0 // index of s
    while (i < word.length && j < s.length) {
      const c = word[i]
      const indices = map.get(c)
      if (!indices) return false
      const index = indices.find((index) => index >= j)
      if (index === undefined) return false
      i++
      j = index + 1
    }
    return i === word.length
  }

  let count = 0
  const map = new Map<string, number[]>()
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (!map.has(c)) map.set(c, [])
    map.get(c)?.push(i)
  }

  // check one by one
  for (const word of words) {
    if (isSubsequence(word, s, map)) count++
  }
  return count
}

export { isSubsequence, numMatchingSubsequence }
