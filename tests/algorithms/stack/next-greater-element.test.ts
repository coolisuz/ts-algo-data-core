import { nextGreaterElement } from '../../../src/algorithms/stack/next-greater-element';

describe('nextGreaterElement', () => {
    test('handles basic case with mixed elements', () => {
        expect(nextGreaterElement([4, 6, 3, 2, 8, 1])).toEqual([6, 8, 8, 8, -1, -1]);
    });

    test('handles array with ascending order', () => {
        expect(nextGreaterElement([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, -1]);
    });

    test('handles array with descending order', () => {
        expect(nextGreaterElement([5, 4, 3, 2, 1])).toEqual([-1, -1, -1, -1, -1]);
    });

    test('handles array with duplicate elements', () => {
        expect(nextGreaterElement([3, 3, 4, 4, 5, 5])).toEqual([4, 4, 5, 5, -1, -1]);
    });

    test('handles single element array', () => {
        expect(nextGreaterElement([42])).toEqual([-1]);
    });

    test('handles array with all equal elements', () => {
        expect(nextGreaterElement([7, 7, 7, 7])).toEqual([-1, -1, -1, -1]);
    });

    test('handles array at constraint boundaries', () => {
        const largeValues = [1000, 500, 1000, 600];
        expect(nextGreaterElement(largeValues)).toEqual([-1, 1000, -1, -1]);

        expect(nextGreaterElement([0])).toEqual([-1]);

        expect(nextGreaterElement([0, 0, 0, 5])).toEqual([5, 5, 5, -1]);
    });
});