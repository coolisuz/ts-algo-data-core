/**
 * Given an array, nums, and an integer, k, rotate the array to
 * the right by k positions so that each rotation involves shifting
 * the elements one position at a time.
 * Time complexity O(n) - where n is the length of the array
 * Space complecity O(1) - no extra memory used
 *
 * @param {number[]} arr - The input array of numbers
 * @param {number} k - The number of rotation to the right
 * @returns {number[]} - Right rotated array
 *
 * @constraints
 * 1 ≤ arr.length ≤ 10^3
 * -10^5 ≤ arr[i] ≤ 10^4
 * 1 ≤ k ≤ 10^3
 */

export function rightRotate(arr: number[], k: number): number[] {
    if (!Array.isArray(arr)) {
        throw new TypeError("An array of numbers required") as never;
    }

    if (arr.length < 2 || k === 0) return arr;

    let counter = 1;

    while (counter <= k) {
        const popped = arr.pop();
        arr.unshift(popped as number);
        counter++;
    }

    return arr;
}
