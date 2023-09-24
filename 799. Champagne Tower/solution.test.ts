import { champagneTower } from './solution'

describe('799. Champagne Tower', () => {
  test('Example test case 1', () => {
    const poured = 1
    const queryRow = 1
    const queryGlass = 1
    const expected = 0
    const result = champagneTower(poured, queryRow, queryGlass)
    expect(result).toBe(expected)
  })

  test('Example test case 2', () => {
    const poured = 2
    const queryRow = 1
    const queryGlass = 1
    const expected = 0.5
    const result = champagneTower(poured, queryRow, queryGlass)
    expect(result).toBe(expected)
  })

  test('Example test case 3', () => {
    const poured = 100000009
    const queryRow = 33
    const queryGlass = 17
    const expected = 1
    const result = champagneTower(poured, queryRow, queryGlass)
    expect(result).toBe(expected)
  })
})
