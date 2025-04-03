/**
 * Given an array of integers, nums, and an integer target, k,
 * find two numbers in the array that sum up to the target k.
 *
 * Time complexity O(n) - where n is the number of elements in the array
 * Space complecity O(n) - where n is the size of the Map
 *
 * @param {number[]} nums - The input array of numbers;
 * @param {number} k - The target number that two elements in the nums array sum up to
 * @returns {number[]} - A new array containing elements sum up to the target k parameter
 *
 * @constraints
 * 2 ≤ nums.length ≤ 10^3
 * -10^5 ≤ nums[i] ≤ 10^5
 * -10^5 ≤ k ≤ 10^5
 *
 * @example
 * findSum([2,4,6,8,10,19], 21) // returns [2, 19]
 * findSum([-4,-8,0,-7,-3,-10] , -15) // returns [-8,-7]
 *
 */

export function findSum(nums: number[], k: number): number[] {
    if (isNaN(k) || !Array.isArray(nums)) {
        throw new TypeError(
            "nums must be valid array of integers and k must be a valid number",
        ) as never;
    }

    const seen: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = k - current;

        if (seen.has(complement)) {
            return [complement, current];
        }

        seen.set(current, i);
    }

    return [];
}
