function nextGreatestLetter (letters: string[], target: string): string {
  if (target >= letters[letters.length - 1]) {
    return letters[0]
  }
  let left = 0
  let right = letters.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (letters[mid] <= target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return letters[left]
}

export default nextGreatestLetter
