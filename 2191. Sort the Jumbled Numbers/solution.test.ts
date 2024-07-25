import { sortJumbled } from './solution'

describe('Sort the Jumbled Numbers', () => {
  test('Test case 1', () => {
    expect(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38])).toEqual(
      [338, 38, 991]
    )
  })

  test('Test case 2', () => {
    expect(
      sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123])
    ).toEqual([123, 456, 789])
  })
})
