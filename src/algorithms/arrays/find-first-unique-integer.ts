/**
 * Given an array nums, find the first nonrepeating integer in it.
 *
 * Time Complexity O(n) - where n is the length of the array
 * Space Complexity O(n) - where n is the length of the object used to store the values
 *
 * @param {number[]} arr - The input array of numbers
 * @returns {number} - A single minium integer in the array
 *
 * @constraints
 * 1 ≤ arr.length ≤ 10^3
 * -10^4 ≤ arr[i] ≤ 10^4
 */

export function findFirstUnique(arr: number[]): number {
    const frequencyMap: Record<number, number> = {};

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    for (const num of arr) {
        if (frequencyMap[num] === 1) {
            return num;
        }
    }

    return -1;
}
