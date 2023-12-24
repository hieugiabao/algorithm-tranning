import { minOperations } from './solution'

describe('1758. Minimum Changes To Make Alternating Binary String', () => {
  test('Example test case 1', () => {
    expect(minOperations('0100')).toBe(1)
  })

  test('Example test case 2', () => {
    expect(minOperations('10')).toBe(0)
  })

  test('Example test case 3', () => {
    expect(minOperations('1111')).toBe(2)
  })

  // Add more tests!

  test('Empty string', () => {
    expect(minOperations('')).toBe(0)
  })

  test('Single character', () => {
    expect(minOperations('0')).toBe(0)
    expect(minOperations('1')).toBe(0)
  })

  test('Two characters', () => {
    expect(minOperations('00')).toBe(1)
    expect(minOperations('01')).toBe(0)
    expect(minOperations('10')).toBe(0)
    expect(minOperations('11')).toBe(1)
  })

  test('Three characters', () => {
    expect(minOperations('000')).toBe(1)
    expect(minOperations('001')).toBe(1)
    expect(minOperations('010')).toBe(0)
    expect(minOperations('011')).toBe(1)
    expect(minOperations('100')).toBe(1)
    expect(minOperations('101')).toBe(0)
    expect(minOperations('110')).toBe(1)
    expect(minOperations('111')).toBe(1)
  })
})
