import { findKLargest } from "../../../src/algorithms/heap/find-k-largest";

describe("findKLargest", () => {
    test("should find k largest elements from unsorted array", () => {
        const arr = [7, 10, 4, 3, 20, 15];
        const result = findKLargest(arr, 3);

        expect(result).toHaveLength(3);
        expect(result.sort((a, b) => b - a)).toEqual([20, 15, 10]);
    });

    test("should handle large array with small k", () => {
        const arr = Array.from({ length: 100 }, (_, i) => i + 1); // [1, 2, 3, ..., 100]
        const result = findKLargest(arr, 5);

        expect(result).toHaveLength(5);
        expect(result.sort((a, b) => b - a)).toEqual([100, 99, 98, 97, 96]);
    });

    test("should handle array with all same elements", () => {
        const arr = [5, 5, 5, 5, 5];
        const result = findKLargest(arr, 3);

        expect(result).toHaveLength(3);
        expect(result).toEqual([5, 5, 5]);
    });

    test("should handle single element array", () => {
        const arr = [42];
        const result = findKLargest(arr, 1);

        expect(result).toHaveLength(1);
        expect(result).toEqual([42]);
    });

    test("should throw error when k is less than 1", () => {
        const arr = [1, 2, 3, 4, 5];

        expect(() => findKLargest(arr, 0)).toThrow("k must be at least 1");
        expect(() => findKLargest(arr, -1)).toThrow("k must be at least 1");
    });

    test("should throw error when k is greater than array length", () => {
        const arr = [1, 2, 3];

        expect(() => findKLargest(arr, 4)).toThrow(
            "k cannot be greater than array length",
        );
        expect(() => findKLargest(arr, 10)).toThrow(
            "k cannot be greater than array length",
        );
    });
});
