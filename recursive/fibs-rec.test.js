import fibsRec from './fibs-rec'

test('should return the first eight integers correctly', () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
})

test('should return an empty array if input is less than 1', () => {
    expect(fibsRec(0)).toEqual([])
})

test('should return false if a non-integer is used', () => {
    expect(fibsRec(2.5)).toEqual([])
    expect(fibsRec('2')).toEqual([])
})
