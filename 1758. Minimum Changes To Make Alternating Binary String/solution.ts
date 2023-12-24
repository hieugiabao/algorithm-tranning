function minOperations(s: string): number {
  let start0 = 0 // number of operations to make s start with 0
  let start1 = 0 // number of operations to make s start with 1

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      // i is even -> s[i] should be 0 if s starts with 0 and 1 otherwise
      if (s[i] === '1') {
        // s starts with 0 must be changed to 1
        start0++
      } else {
        // s starts with 1 must be changed to 0
        start1++
      }
    } else if (i % 2 === 1) {
      // i is odd -> s[i] should be 1 if s starts with 0 and 0 otherwise
      if (s[i] === '1') {
        start1++
      } else {
        start0++
      }
    }
  }

  // return the minimum number of operations
  return Math.min(start0, start1)
}

export { minOperations }
