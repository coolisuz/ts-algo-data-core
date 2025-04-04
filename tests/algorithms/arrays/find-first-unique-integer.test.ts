import { findFirstUnique } from '../../../src/algorithms/arrays/find-first-unique-integer';

describe('findFirstUnique', () => {
    test('single element array (edge case)', () => {
        expect(findFirstUnique([5])).toEqual(5);
    });

    test('all duplicates except last element (edge case)', () => {
        expect(findFirstUnique([2, 2, 2, 2, 1])).toEqual(1);
    });

    test('multiple uniques - should return first occurrence', () => {
        expect(findFirstUnique([3, 1, 3, 1, 2])).toEqual(2);
    });

    test('large numbers within constraints (edge case)', () => {
        expect(findFirstUnique([10000, -10000, 10000])).toEqual(-10000);
    });

    test('no unique elements (edge case)', () => {
        expect(findFirstUnique([4, 4, 4, 4])).toEqual(-1);
    });
});