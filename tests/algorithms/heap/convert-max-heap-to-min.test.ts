import { convertMax } from "../../../src/algorithms/heap/convert-max-heap-to-min";

describe("convertMax", () => {
    const isValidMinHeap = (arr: number[]): boolean => {
        for (let i = 0; i < Math.floor(arr.length / 2); i++) {
            const leftChild = 2 * i + 1;
            const rightChild = 2 * i + 2;

            if (leftChild < arr.length && arr[i] > arr[leftChild]) {
                return false;
            }

            if (rightChild < arr.length && arr[i] > arr[rightChild]) {
                return false;
            }
        }
        return true;
    };

    test("should convert a simple max heap to min heap", () => {
        const maxHeap = [9, 4, 7, 1, -2, 6, 5];
        const result = convertMax(maxHeap);

        expect(result).toHaveLength(maxHeap.length);
        expect(isValidMinHeap(result)).toBe(true);
        expect(result.sort((a, b) => a - b)).toEqual(
            maxHeap.sort((a, b) => a - b),
        );
    });

    test("should convert a single element heap", () => {
        const maxHeap = [5];
        const result = convertMax(maxHeap);

        expect(result).toEqual([5]);
        expect(isValidMinHeap(result)).toBe(true);
    });

    test("should handle empty array", () => {
        const maxHeap: number[] = [];
        const result = convertMax(maxHeap);

        expect(result).toEqual([]);
        expect(isValidMinHeap(result)).toBe(true);
    });

    test("should convert a larger max heap to min heap", () => {
        const maxHeap = [50, 30, 40, 20, 25, 35, 10, 15, 5];
        const result = convertMax(maxHeap);

        expect(result).toHaveLength(maxHeap.length);
        expect(isValidMinHeap(result)).toBe(true);
        expect(result.sort((a, b) => a - b)).toEqual(
            maxHeap.sort((a, b) => a - b),
        );
    });

    test("should handle heap with duplicate values", () => {
        const maxHeap = [10, 10, 8, 8, 6, 6, 4];
        const result = convertMax(maxHeap);

        expect(result).toHaveLength(maxHeap.length);
        expect(isValidMinHeap(result)).toBe(true);
        expect(result.sort((a, b) => a - b)).toEqual(
            maxHeap.sort((a, b) => a - b),
        );
    });

    test("should handle heap with negative numbers", () => {
        const maxHeap = [5, -2, 3, -10, -5, 1, 0];
        const result = convertMax(maxHeap);

        expect(result).toHaveLength(maxHeap.length);
        expect(isValidMinHeap(result)).toBe(true);
        expect(result.sort((a, b) => a - b)).toEqual(
            maxHeap.sort((a, b) => a - b),
        );
    });

    test("should not mutate the original array", () => {
        const maxHeap = [9, 4, 7, 1, -2, 6, 5];
        const originalCopy = [...maxHeap];

        convertMax(maxHeap);

        expect(maxHeap).toEqual(originalCopy);
    });

    test("should convert a two-element heap", () => {
        const maxHeap = [10, 5];
        const result = convertMax(maxHeap);

        expect(result).toHaveLength(2);
        expect(isValidMinHeap(result)).toBe(true);
        expect(result.sort((a, b) => a - b)).toEqual([5, 10]);
    });

    test("should handle already sorted array (worst case for max heap)", () => {
        const maxHeap = [1, 2, 3, 4, 5, 6, 7];
        const result = convertMax(maxHeap);

        expect(result).toHaveLength(maxHeap.length);
        expect(isValidMinHeap(result)).toBe(true);
        expect(result.sort((a, b) => a - b)).toEqual(
            maxHeap.sort((a, b) => a - b),
        );
    });
});
