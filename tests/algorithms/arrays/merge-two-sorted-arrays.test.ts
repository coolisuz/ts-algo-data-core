import { mergeSortedArrays } from "../../../src/algorithms/arrays/merge-two-sorted-array";

describe("mergeTwoSortedArrays", () => {
    test("should merge two simple sorted arrays with no overlapping values", () => {
        const nums1: number[] = [1, 2, 3];
        const num2: number[] = [4, 5, 6];
        const expected: number[] = [1, 2, 3, 4, 5, 6];

        expect(mergeSortedArrays(nums1, num2)).toEqual(expected);
    });

    test("should correctly merge arrays containing negative numbers", () => {
        const nums1: number[] = [0, 1, 4, 9];
        const num2: number[] = [-111, -20, -5, 5, 11, 20];
        const expected: number[] = [-111, -20, -5, 0, 1, 4, 5, 9, 11, 20];

        expect(mergeSortedArrays(nums1, num2)).toEqual(expected);
    });

    test("should handle duplicate values across arrays correctly", () => {
        const nums1: number[] = [-1, 3];
        const num2: number[] = [-1, -1, 0, 0, 1, 2];
        const expected: number[] = [-1, -1, -1, 0, 0, 1, 2, 3];

        expect(mergeSortedArrays(nums1, num2)).toEqual(expected);
    });

    test("should merge when first array has all greater values than second array", () => {
        const nums1: number[] = [6, 7, 8, 9, 10];
        const num2: number[] = [1, 2, 3, 4, 5];
        const expected: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        expect(mergeSortedArrays(nums1, num2)).toEqual(expected);
    });

    test("should handle arrays of significantly different lengths", () => {
        const nums1: number[] = [10, 49, 99, 110, 176];
        const num2: number[] = [1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100];
        const expected: number[] = [
            1, 2, 4, 7, 8, 10, 12, 15, 19, 24, 49, 50, 69, 80, 99, 100, 110,
            176,
        ];

        expect(mergeSortedArrays(nums1, num2)).toEqual(expected);
    });
});
