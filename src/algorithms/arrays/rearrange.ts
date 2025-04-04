/**
 * Implement a function that rearranges elements in an array so that
 * all negative elements appear to the left and all positive elements
 * (including zero) appear to the right. It’s important to note that
 * maintaining the original sorted order of the input array is not
 * required for this task.
 *
 * Time complexity O(n) - Where n is the length of the array
 * Space complexity O(n) - two constants were introduced which keep positive values and negative values
 *
 * @param {number[]} arr - The input array of numbers
 * @returns {number[]} - An integer of rearranged arrays
 *
 * @constraints
 * 1 ≤ arr.length ≤ 10^3
 * -10^5 ≤ arr[i] ≤ 10^5
 */

export function rearrange(arr: number[]): number[] {
    if (!Array.isArray(arr)) {
        throw new TypeError("An array of numbers required") as never;
    }

    let pos = [],
        neg = [];

    for (let el of arr) {
        if (el < 0) {
            neg.push(el);
        } else {
            pos.push(el);
        }
    }

    return neg.concat(pos);
}
