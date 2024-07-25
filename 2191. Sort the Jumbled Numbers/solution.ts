function sortJumbled(mapping: number[], nums: number[]): number[] {
  // Write your code here
  const map = new Map<number, number>()

  function translateNum(num: number) {
    const digits = num.toString().split('')
    for (let i = 0; i < digits.length; i++) {
      digits[i] = mapping[parseInt(digits[i])].toString()
    }
    return parseInt(digits.join(''))
  }

  nums.forEach((num) => {
    map.set(num, translateNum(num))
  })

  nums.sort((a, b) => {
    return map.get(a)! - map.get(b)!
  })

  return nums
}

export { sortJumbled }
