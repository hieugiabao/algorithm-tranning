import nextGreatestLetter from '.'

describe('744. Find Smallest Letter Greater Than Target', () => {
  test('nextGreatestLetter', () => {
    expect(nextGreatestLetter(['c', 'f', 'j'], 'a')).toBe('c')
    expect(nextGreatestLetter(['c', 'f', 'j'], 'c')).toBe('f')
    expect(nextGreatestLetter(['x', 'x', 'y', 'y'], 'x')).toBe('y')
    expect(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z')).toBe('x')
  })
})
