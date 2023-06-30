import { isValid } from './solution'

describe('20. Valid Parentheses', () => {
  test('Example 1', () => {
    expect(isValid('()')).toBe(true)
  })

  test('Example 2', () => {
    expect(isValid('()[]{}')).toBe(true)
  })

  test('Example 3', () => {
    expect(isValid('(]')).toBe(false)
  })

  test('Example 4', () => {
    expect(isValid('([)]')).toBe(false)
  })

  test('Example 5', () => {
    expect(isValid('{[]}')).toBe(true)
  })

  test('Example 6', () => {
    expect(isValid('')).toBe(true)
  })
})
