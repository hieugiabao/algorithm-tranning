function frequencySort(nums: number[]): number[] {
  const freqMap = new Map<number, number>()
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }

  return nums.sort((a, b) => {
    if (freqMap.get(a) === freqMap.get(b)) {
      return b - a
    }
    return freqMap.get(a)! - freqMap.get(b)!
  })
}

export { frequencySort }
