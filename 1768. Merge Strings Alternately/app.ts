/**
 * The function merges two strings alternately by appending one character at a time from each string until both strings are
 * fully merged.
 * @param {string} word1 - A string representing the first word to be merged alternately with the second word.
 * @param {string} word2 - The second string parameter of the function `mergeAlternately`.
 * @returns The function `mergeAlternately` is returning a string that contains the characters of `word1` and `word2`
 * merged alternately.
 */
function mergeAlternately (word1: string, word2: string): string {
  let result: string = ''
  let i = 0

  while (i < word1.length || i < word2.length) {
    if (i < word1.length) result += word1[i]
    if (i < word2.length) result += word2[i]
    i++
  }

  return result
}

export default mergeAlternately
