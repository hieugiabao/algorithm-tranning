import { change } from './solution'

describe('518. Coin Change II', () => {
  it('Case 1', () => {
    const amount = 5
    const coins = [1, 2, 5]
    expect(change(amount, coins)).toBe(4)
  })

  it('Case 2', () => {
    const amount = 3
    const coins = [2]
    expect(change(amount, coins)).toBe(0)
  })

  it('Case 3', () => {
    const amount = 10
    const coins = [10]
    expect(change(amount, coins)).toBe(1)
  })
})
