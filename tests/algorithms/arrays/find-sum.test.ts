import { findSum } from "../../../src/algorithms/arrays/find-sum";

describe("findSum", () => {
    test("should find the sum of positive two numbers in the array equal to given 2nd parameter", () => {
        const result = findSum([2, 4, 6, 8, 10, 19], 21);

        expect(result.length).toBe(2);
        expect(result).toContain(2);
        expect(result).toContain(19);
    });

    test("should find the sum of negative two numbers in the array equal to given 2nd parameter", () => {
        const result = findSum([-4, -8, 0, -7, -3, -10], -15);

        expect(result.length).toBe(2);
        expect(result).toContain(-7);
        expect(result).toContain(-8);
    });

    test("should find the sum two numbers in the longer array equal to given 2nd parameter", () => {
        const result = findSum(
            [-1, 9, 56, 12, -13, -6, 23, 19, 71, -56, -14],
            -44,
        );

        expect(result.length).toBe(2);
        expect(result).toContain(-56);
        expect(result).toContain(12);
    });

    test("should find sum in the short array", () => {
        const result = findSum([3, 3], 6);

        expect(result.length).toBe(2);
        expect(result).toContain(3);
        expect(result).toContain(3);
    });

    test("should find the sum of two number in the array equal to 0", () => {
        const result = findSum(
            [49, 17, 15, 22, -45, 29, 18, -15, 11, 37, 12, -52],
            0,
        );

        expect(result.length).toBe(2);
        expect(result).toContain(15);
        expect(result).toContain(-15);
    });
});
