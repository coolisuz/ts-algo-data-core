/**
 * Given two arrays, array1 and array2, checks whether the arrays are disjoint.
 * Two arrays are disjoint if they have no common elements.
 *
 * @time O(n + m) - where n is length of arr1 and m is length of arr2
 * @space O(n) - where n is the size of the Set storing arr1 elements
 *
 * @param {T[]} arr1 - The first array
 * @param {T[]} arr2 - The second array
 * @returns {boolean} - True if arrays are disjoint, false otherwise
 */
export function checkDisjoint<T>(arr1: T[], arr2: T[]): boolean {
    const hash = new Set();

    for (let i = 0; i < arr1.length; i++) {
        hash.add(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        if (hash.has(arr2[i])) {
            return false;
        }
    }

    return true;
}
