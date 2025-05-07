import { smallestSubarrayWithSum } from "../../../src/algorithms/arrays/find-smallest-subArray-sum";

describe("smallestSubarrayWithSum", () => {
    test("should return 0 for empty array", () => {
        expect(smallestSubarrayWithSum([], 5)).toBe(0);
    });

    test("should return 0 when target sum cannot be achieved", () => {
        expect(smallestSubarrayWithSum([1, 2, 3], 10)).toBe(0);
    });

    test("should return 1 when single element equals target", () => {
        expect(smallestSubarrayWithSum([5], 5)).toBe(1);
    });

    test("should return 1 when single element is greater than target", () => {
        expect(smallestSubarrayWithSum([7], 5)).toBe(1);
    });

    test("should find smallest subarray with sum equal to target", () => {
        expect(smallestSubarrayWithSum([2, 1, 5, 2, 3, 2], 7)).toBe(2);
    });

    test("should find smallest subarray with sum greater than target", () => {
        expect(smallestSubarrayWithSum([2, 1, 5, 2, 8], 7)).toBe(1);
    });

    test("should handle array with all elements equal to target", () => {
        expect(smallestSubarrayWithSum([5, 5, 5, 5], 5)).toBe(1);
    });

    test("should handle array with negative numbers", () => {
        expect(smallestSubarrayWithSum([-1, 4, 2, 1, -3, 2], 5)).toBe(2);
    });

    test("should handle array with zero values", () => {
        expect(smallestSubarrayWithSum([0, 0, 0, 5, 0], 5)).toBe(1);
    });

    test("should handle large array", () => {
        const arr = Array(1000).fill(1);
        expect(smallestSubarrayWithSum(arr, 100)).toBe(100);
    });

    test("should handle array with target sum at the end", () => {
        expect(smallestSubarrayWithSum([1, 1, 1, 1, 1, 5], 5)).toBe(1);
    });

    test("should handle array with target sum at the beginning", () => {
        expect(smallestSubarrayWithSum([5, 1, 1, 1, 1, 1], 5)).toBe(1);
    });

    test("should handle array with target sum in the middle", () => {
        expect(smallestSubarrayWithSum([1, 1, 5, 1, 1], 5)).toBe(1);
    });

    test("should handle array with multiple possible solutions", () => {
        expect(smallestSubarrayWithSum([1, 2, 3, 4, 5], 9)).toBe(2);
    });
});
