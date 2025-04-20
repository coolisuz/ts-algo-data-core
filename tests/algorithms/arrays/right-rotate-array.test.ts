import { rightRotate } from "../../../src/algorithms/arrays/right-rotate-array";

describe("rightRotate", () => {
    test("should rotate array by 1 position", () => {
        expect(rightRotate([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
    });

    test("should handle rotation count larger than array length", () => {
        expect(rightRotate([1, 2, 3], 5)).toEqual([2, 3, 1]);
    });

    test("should return same array when k equals array length", () => {
        expect(rightRotate([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
    });

    test("should work with single element array", () => {
        expect(rightRotate([5], 3)).toEqual([5]);
    });

    test("should handle negative numbers in array", () => {
        expect(rightRotate([-1, -2, -3], 2)).toEqual([-2, -3, -1]);
    });
});
