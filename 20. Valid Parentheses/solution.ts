function isValid(s: string): boolean {
  const stack: string[] = []

  for (const c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else if (c === ')' && stack.pop() !== '(') {
      return false
    } else if (c === ']' && stack.pop() !== '[') {
      return false
    } else if (c === '}' && stack.pop() !== '{') {
      return false
    }
  }

  return stack.length === 0
}

export { isValid }
