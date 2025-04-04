/**
 * Given an array of integers, arr,
 * find the minimum value from the array.
 *
 * Time Complexity O(n) - where n is the length of the array
 * Space Complexity O(1) - constant gets dropped, no extra usage of memory
 *
 * @param {number[]} arr - The input array of numbers
 * @returns {number} - A single minium integer in the array
 *
 * @constraints
 * 1 ≤ arr.length ≤ 10^3
 * -10^5 ≤ arr[i] ≤ 10^5
 */

export function findMinimum(arr: number[]): number {
    if (!Array.isArray(arr) || !arr.length) {
        throw new TypeError(
            "Array must consist of valid integer is required and should not be empty",
        ) as never;
    }

    if (!arr.every((element) => typeof element === "number")) {
        throw new TypeError("Array must contain only numbers") as never;
    }

    let minimum: number = arr[0];

    for (let element of arr) {
        if (element < minimum) {
            minimum = element;
        }
    }
    return minimum;
}
