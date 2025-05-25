import { checkDisjoint } from "../../../src/algorithms/hash/is-joint";

describe("checkDisjoint", () => {
    test("should return true when arrays have no common elements", () => {
        const arr1 = [1, 2, 3, 4];
        const arr2 = [5, 6, 7, 8];

        const result = checkDisjoint(arr1, arr2);
        expect(result).toBe(true);
    });

    test("should return false when arrays have common elements", () => {
        const arr1 = [1, 2, 3, 4];
        const arr2 = [3, 5, 6, 7];

        const result = checkDisjoint(arr1, arr2);
        expect(result).toBe(false);
    });

    test("should return false when arrays have multiple common elements", () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 6, 7, 8];

        const result = checkDisjoint(arr1, arr2);
        expect(result).toBe(false);
    });

    test("should work with string arrays", () => {
        const arr1 = ["apple", "banana", "orange"];
        const arr2 = ["grape", "kiwi", "mango"];

        const result = checkDisjoint(arr1, arr2);
        expect(result).toBe(true);
    });
});
