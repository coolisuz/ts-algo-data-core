import { isBalanced } from '../../../src/algorithms/stack/valid-parantheses';

describe('isBalanced', () => {
    test('should return true for properly balanced parentheses', () => {
        expect(isBalanced('()')).toBe(true);
        expect(isBalanced('()[]{}')).toBe(true);
        expect(isBalanced('{[()]}')).toBe(true);
    });

    test('should return false for unbalanced parentheses with incorrect order', () => {
        expect(isBalanced('([)]')).toBe(false);
        expect(isBalanced('](')).toBe(false);
    });

    test('should return false for unbalanced parentheses with missing brackets', () => {
        expect(isBalanced('(]')).toBe(false);
        expect(isBalanced('([')).toBe(false);
        expect(isBalanced('(()(')).toBe(false);
    });

    test('should return false for unbalanced parentheses with incorrect types', () => {
        expect(isBalanced('{)')).toBe(false);
        expect(isBalanced('({])')).toBe(false);
    });

    test('should return false for empty string and edge cases', () => {
        expect(isBalanced('')).toBe(false);
        expect(isBalanced(')')).toBe(false);
        expect(isBalanced('())(){}[](([]))')).toBe(false);
    });
});