import { findMinimum } from '../../../src/algorithms/arrays/find-minimum-array';

describe('findMinimum', () => {
    test('should find the minimum integer in the array', () => {
        expect(findMinimum([-1,-2,5,4])).toEqual(-2);
    });

    test('should find minimum negative integer in the array consisting only negative numbers', () => {
        expect(findMinimum([-1,-2,-3,-4,-10])).toEqual(-10)
    });

    test('should return an integer in array consists of all same integers', () => {
        expect(findMinimum([2,2,2,2,2])).toEqual(2);
    });

    test('should find the minimum integer in the longer array', () => {
        expect(findMinimum([20,13,12,11,6,18,3])).toEqual(3);
    });

    test('should find the minimum integer in array with the size of two', () => {
        expect(findMinimum([-1,2])).toEqual(-1);
    });
})