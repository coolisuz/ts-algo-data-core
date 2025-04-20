import { findSecondMaximum } from "../../../src/algorithms/arrays/find-second-max";

describe("findSecondMaximum", () => {
    test("normal case", () => {
        expect(findSecondMaximum([3, 1, 4, 2])).toBe(3);
    });

    test("all same values", () => {
        expect(findSecondMaximum([5, 5, 5])).toBe(5);
    });

    test("negative numbers", () => {
        expect(findSecondMaximum([-1, -2, -3])).toBe(-2);
    });

    test("two elements", () => {
        expect(findSecondMaximum([10, 20])).toBe(10);
    });

    test("multiple max values", () => {
        expect(findSecondMaximum([1, 2, 2, 3])).toBe(2);
    });
});
