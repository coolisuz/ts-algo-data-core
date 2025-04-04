/**
 * Given an array of integers, nums, find the second maximum value from the array.
 *
 * Time complexity O(n) - Where n is the length of the array
 * Space complexity O(1) - two constants were introduced which keep single value and can be dropped in Big O
 * @param {number[]} arr - The input array of numbers
 * @returns {number} - An integer
 *
 * @constraints
 * 1 ≤ arr.length ≤ 10^3
 * -10^5 ≤ arr[i] ≤ 10^5
 */

export function findSecondMaximum(arr: number[]): number {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new TypeError("An array of numbers required");
    }

    if (arr.length === 1) {
        return arr[0];
    }

    let first = -Infinity;
    let second = -Infinity;

    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    return second === -Infinity ? first : second;
}
