import { checkSubsetArray } from "../../../src/algorithms/hash/is-subset-array";
import { IHashEntry } from "../../../src/data-structures/interfaces";

describe("checkSubsetArray", () => {
    test("should return true when arr2 is a subset of arr1", () => {
        const arr1: IHashEntry<string>[] = [
            { key: 1, data: "apple", next: null },
            { key: 2, data: "banana", next: null },
            { key: 3, data: "orange", next: null },
            { key: 4, data: "grape", next: null },
        ];

        const arr2: IHashEntry<string>[] = [
            { key: 1, data: "apple", next: null },
            { key: 3, data: "orange", next: null },
        ];

        const result = checkSubsetArray(arr1, arr2);
        expect(result).toBe(true);
    });

    test("should return false when arr2 is not a subset of arr1", () => {
        const arr1: IHashEntry<string>[] = [
            { key: 1, data: "apple", next: null },
            { key: 2, data: "banana", next: null },
        ];

        const arr2: IHashEntry<string>[] = [
            { key: 1, data: "apple", next: null },
            { key: 3, data: "orange", next: null },
        ];

        const result = checkSubsetArray(arr1, arr2);
        expect(result).toBe(false);
    });

    test("should return false when key exists but data is different", () => {
        const arr1: IHashEntry<number>[] = [
            { key: 1, data: 100, next: null },
            { key: 2, data: 200, next: null },
        ];

        const arr2: IHashEntry<number>[] = [{ key: 1, data: 150, next: null }];

        const result = checkSubsetArray(arr1, arr2);
        expect(result).toBe(false);
    });
});
