import { findSymmetric } from "../../../src/algorithms/hash/find-symmetric";

describe("findSymmetric", () => {
    test("should find symmetric pairs in array", () => {
        const input = [
            [1, 2],
            [3, 4],
            [2, 1],
            [4, 3],
        ];

        const result = findSymmetric(input);

        expect(result).toHaveLength(4);
        expect(result).toContainEqual([2, 1]);
        expect(result).toContainEqual([4, 3]);
    });

    test("should return empty array when no symmetric pairs exist", () => {
        const input = [
            [1, 2],
            [3, 4],
            [5, 6],
        ];

        const result = findSymmetric(input);
        expect(result).toHaveLength(0);
    });

    test("should handle single pair", () => {
        const input = [[1, 2]];

        const result = findSymmetric(input);
        expect(result).toHaveLength(0);
    });

    test("should handle empty array", () => {
        const input: number[][] = [];

        const result = findSymmetric(input);
        expect(result).toHaveLength(0);
    });
});
