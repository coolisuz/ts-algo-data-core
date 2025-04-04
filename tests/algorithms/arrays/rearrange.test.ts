import { rearrange } from '../../../src/algorithms/arrays/rearrange';

describe('rearrange', () => {
    test('should separate negatives and positives', () => {
        expect(rearrange([-1, 2, -3, 4, 0])).toEqual([-1, -3, 2, 4, 0]);
    });

    test('all negative numbers', () => {
        expect(rearrange([-5, -2, -10])).toEqual([-5, -2, -10]);
    });

    test('all positive numbers including zero', () => {
        expect(rearrange([3, 0, 1, 2])).toEqual([3, 0, 1, 2]);
    });

    test('empty array', () => {
        expect(rearrange([])).toEqual([]);
    });

    test('single element array', () => {
        expect(rearrange([-7])).toEqual([-7]);
    });
});