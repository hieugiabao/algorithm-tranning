import { soupServings } from './solution'

describe('808. Soup Servings', () => {
  test('example 1', () => {
    expect(soupServings(50)).toBe(0.625)
  })

  test('example 2', () => {
    expect(soupServings(100)).toBe(0.71875)
  })

  test('Private test case', () => {
    expect(soupServings(660295675)).toBe(1)
  })
})
