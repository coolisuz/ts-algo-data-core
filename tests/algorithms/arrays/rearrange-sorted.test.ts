import { rearrangeSorted } from "../../../src/algorithms/arrays/rearrange-sorted";

describe("rearrangeSorted", () => {
    test("should rearrange sorted array in max-min order", () => {
        expect(rearrangeSorted([1, 2, 3, 4, 5])).toEqual([5, 1, 4, 2, 3]);
    });

    test("should handle array with single element", () => {
        expect(rearrangeSorted([10])).toEqual([10]);
    });

    test("should work with even length arrays", () => {
        expect(rearrangeSorted([1, 2, 3, 4])).toEqual([4, 1, 3, 2]);
    });

    test("should work with odd length arrays", () => {
        expect(rearrangeSorted([1, 2, 3, 4, 5, 6, 7])).toEqual([
            7, 1, 6, 2, 5, 3, 4,
        ]);
    });

    test("should handle empty array", () => {
        expect(rearrangeSorted([])).toEqual([]);
    });
});
