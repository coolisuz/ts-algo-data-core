import { removeEven } from "../../../src/algorithms/arrays/remove-even-integers";

describe("removeEven function", () => {
    test("removes all even numbers from the array", () => {
        expect(removeEven([2, 4, 6, 8, 10])).toEqual([]);
    });

    test("returns the same array if evens not found", () => {
        const odds: number[] = [1, 3, 5, 7, 9];
        expect(removeEven(odds)).toEqual(odds);
    });

    test("handles array with a single even number", () => {
        expect(removeEven([2])).toEqual([]);
    });

    test("handles numbers at constraint boundaries", () => {
        expect(removeEven([-100000, -99999, 100000, 99999])).toEqual([
            -99999, 99999,
        ]);
    });

    test("handles empty array", () => {
        // This test is outside the constraints (1 ≤ arr.length ≤ 10³)
        expect(removeEven([])).toEqual([]);
    });

    test("handles array with maximum constraint length", () => {
        const largeArray = Array.from(
            { length: 1000 },
            (_: number, i: number) => i + 1,
        );
        const expected = largeArray.filter((num: number) => num % 2 !== 0);

        expect(removeEven(largeArray)).toEqual(expected);
    });

    test("handles zero correctly (zero is even)", () => {
        expect(removeEven([0, 1, 2, 3])).toEqual([1, 3]);
    });
});
