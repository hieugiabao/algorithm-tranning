import mergeAlternately from './app'

describe('1768. Merge Strings Alternately', () => {
  it('example 1', () => {
    expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr')
  })

  it('example 2', () => {
    expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs')
  })

  it('example 3', () => {
    expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd')
  })

  it('Empty strings', () => {
    expect(mergeAlternately('', '')).toBe('')
  })

  it('One empty string', () => {
    expect(mergeAlternately('', 'abc')).toBe('abc')
  })

  it('One empty string', () => {
    expect(mergeAlternately('abc', '')).toBe('abc')
  })
})
