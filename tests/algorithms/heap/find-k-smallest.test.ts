import { findKSmallest } from "../../../src/algorithms/heap/find-k-smallest";

describe("findKSmallest", () => {
    test("should find k smallest elements from unsorted array", () => {
        const arr = [7, 10, 4, 3, 20, 15];
        const result = findKSmallest(arr, 3);

        expect(result).toHaveLength(3);
        expect(result.sort((a, b) => a - b)).toEqual([3, 4, 7]);
    });

    test("should find single smallest element", () => {
        const arr = [7, 10, 4, 3, 20, 15];
        const result = findKSmallest(arr, 1);

        expect(result).toHaveLength(1);
        expect(result).toEqual([3]);
    });

    test("should find all elements when k equals array length", () => {
        const arr = [5, 2, 8, 1];
        const result = findKSmallest(arr, 4);

        expect(result).toHaveLength(4);
        expect(result.sort((a, b) => a - b)).toEqual([1, 2, 5, 8]);
    });

    test("should handle array with duplicate values", () => {
        const arr = [5, 2, 5, 1, 2, 8];
        const result = findKSmallest(arr, 3);

        expect(result).toHaveLength(3);
        expect(result.sort((a, b) => a - b)).toEqual([1, 2, 2]);
    });

    test("should handle array with negative numbers", () => {
        const arr = [5, -2, 3, -10, -5, 1, 0];
        const result = findKSmallest(arr, 4);

        expect(result).toHaveLength(4);
        expect(result.sort((a, b) => a - b)).toEqual([-10, -5, -2, 0]);
    });

    test("should handle already sorted ascending array", () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const result = findKSmallest(arr, 3);

        expect(result).toHaveLength(3);
        expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3]);
    });

    test("should handle already sorted descending array", () => {
        const arr = [6, 5, 4, 3, 2, 1];
        const result = findKSmallest(arr, 3);

        expect(result).toHaveLength(3);
        expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3]);
    });

    test("should handle large array with small k", () => {
        const arr = Array.from({ length: 100 }, (_, i) => 100 - i); // [100, 99, 98, ..., 1]
        const result = findKSmallest(arr, 5);

        expect(result).toHaveLength(5);
        expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5]);
    });

    test("should handle array with all same elements", () => {
        const arr = [5, 5, 5, 5, 5];
        const result = findKSmallest(arr, 3);

        expect(result).toHaveLength(3);
        expect(result).toEqual([5, 5, 5]);
    });

    test("should handle single element array", () => {
        const arr = [42];
        const result = findKSmallest(arr, 1);

        expect(result).toHaveLength(1);
        expect(result).toEqual([42]);
    });

    test("should throw error when k is less than 1", () => {
        const arr = [1, 2, 3, 4, 5];

        expect(() => findKSmallest(arr, 0)).toThrow("k must be at least 1");
        expect(() => findKSmallest(arr, -1)).toThrow("k must be at least 1");
    });

    test("should throw error when k is greater than array length", () => {
        const arr = [1, 2, 3];

        expect(() => findKSmallest(arr, 4)).toThrow(
            "k cannot be greater than array length",
        );
        expect(() => findKSmallest(arr, 10)).toThrow(
            "k cannot be greater than array length",
        );
    });

    test("should handle empty array", () => {
        const arr: number[] = [];

        expect(() => findKSmallest(arr, 0)).toThrow("k must be at least 1");
    });

    test("should handle array with extreme values", () => {
        const arr = [-100000, 100000, 0, -50000, 50000];
        const result = findKSmallest(arr, 3);

        expect(result).toHaveLength(3);
        expect(result.sort((a, b) => a - b)).toEqual([-100000, -50000, 0]);
    });

    test("should find k smallest from mixed positive and negative numbers", () => {
        const arr = [10, -5, 8, -2, 15, -10, 3];
        const result = findKSmallest(arr, 4);

        expect(result).toHaveLength(4);
        expect(result.sort((a, b) => a - b)).toEqual([-10, -5, -2, 3]);
    });

    test("should handle two-element array", () => {
        const arr = [10, 5];
        const result = findKSmallest(arr, 1);

        expect(result).toHaveLength(1);
        expect(result).toEqual([5]);
    });
});
