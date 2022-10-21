import fibs from './fibs'

test('should return the first eight integers correctly', () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
})

test('should return an empty array if input is less than 1', () => {
    expect(fibs(0)).toEqual([])
})

test('should return false if a non-integer is used', () => {
    expect(fibs(2.5)).toEqual([])
    expect(fibs('2')).toEqual([])
})
