import { maxCircularSubarraySum } from "../../../src/algorithms/arrays/find-max-circular-subarray-sum";

describe("maxCircularSubarraySum", () => {
    test("should return 0 for empty array", () => {
        expect(maxCircularSubarraySum([])).toBe(0);
    });

    test("should return the element for single element array", () => {
        expect(maxCircularSubarraySum([5])).toBe(5);
    });

    test("should handle array with all positive numbers", () => {
        expect(maxCircularSubarraySum([1, 2, 3, 4, 5])).toBe(15);
    });

    test("should handle array with all negative numbers", () => {
        expect(maxCircularSubarraySum([-1, -2, -3, -4, -5])).toBe(-1);
    });

    test("should handle array with mixed positive and negative numbers", () => {
        expect(maxCircularSubarraySum([5, -3, 5])).toBe(10);
    });

    test("should handle circular subarray that wraps around", () => {
        expect(maxCircularSubarraySum([8, -1, 3, 4])).toBe(15);
    });

    test("should handle array with zero values", () => {
        expect(maxCircularSubarraySum([0, 0, 0, 0])).toBe(0);
    });

    test("should handle array with maximum sum in the middle", () => {
        expect(maxCircularSubarraySum([-1, 5, 5, -1])).toBe(10);
    });

    test("should handle array with maximum sum at the ends", () => {
        expect(maxCircularSubarraySum([5, -1, -1, 5])).toBe(10);
    });

    test("should handle array with all same numbers", () => {
        expect(maxCircularSubarraySum([2, 2, 2, 2])).toBe(8);
    });

    test("should handle large array", () => {
        const arr = Array(1000).fill(1);
        expect(maxCircularSubarraySum(arr)).toBe(1000);
    });

    test("should handle array with one positive number and rest negative", () => {
        expect(maxCircularSubarraySum([-1, -2, 5, -3, -4])).toBe(5);
    });

    test("should handle array with one negative number and rest positive", () => {
        expect(maxCircularSubarraySum([1, 2, -3, 4, 5])).toBe(12);
    });

    test("should handle array with maximum sum requiring wrapping", () => {
        expect(maxCircularSubarraySum([-2, 4, -1, 4, -1])).toBe(7);
    });
});
