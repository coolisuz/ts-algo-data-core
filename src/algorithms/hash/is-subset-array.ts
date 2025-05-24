import { HashTable } from "../../data-structures/hash";
import { IHashEntry } from "../../data-structures/interfaces";

/**
 * Given two arrays, array1 and array2, checks whether array2 is a subset of array1.
 * Uses a hash table for efficient lookup.
 *
 * @time O(n + m) - where n is length of arr1 and m is length of arr2
 * @space O(n) - where n is the size of the hash table
 *
 * @param {IHashEntry<T>[]} arr1 - The larger array
 * @param {IHashEntry<T>[]} arr2 - The smaller array
 * @returns {boolean} - True if arr2 is a subset of arr1, false otherwise
 */

export function checkSubsetArray<T>(
    arr1: IHashEntry<T>[],
    arr2: IHashEntry<T>[],
): boolean {
    const slots = arr1.length >= arr2.length ? arr1.length : arr2.length;

    const hash = new HashTable(slots);

    for (let i = 0; i < arr1.length; i++) {
        hash.insert(arr1[i].key, arr1[i].data);
    }

    for (let i = 0; i < arr2.length; i++) {
        const foundData = hash.search(arr2[i].key);

        if (foundData === undefined || foundData !== arr2[i].data) {
            return false;
        }
    }

    return true;
}
