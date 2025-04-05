/**
 * We're given a sorted array, nums, containing positive integers only.
 * We have to rearrange the array so that when returned, 0th index of the
 * array will have the largest number, the 1st index will have the smallest number,
 * the 2nd index will have the second largest number, the 3rd index will have
 * the second smallest number, and so on.
 *
 *
 * Time complexity O(n) - Where n is the length of the array
 * Space complexity O(n) - Where n is the length of the rearranged array
 *
 * @param {number[]} arr - The input array of sorted numbers
 * @returns {number[]} - An integer of rearranged arrays
 *
 * @constraints
 * 1 ≤ arr.length ≤ 10^3
 * -10^5 ≤ arr[i] ≤ 10^5
 */

/**
 *  This Two-Pointer runs O(n) in both time and space complexities
 *  easy to read and implement
 */

export function rearrangeSorted(arr: number[]): number[] {
    if (!Array.isArray(arr)) {
        throw new TypeError("An array of numbers required") as never;
    }

    if (arr.length === 1) return arr;

    let result = [],
        left = 0,
        right = arr.length - 1

    while (left <= right) {
        result.push(arr[right]);

        if (left !== right) result.push(arr[left]);

        left++;
        right--;
    }

    return result;
}


