/**
 * Filters an array to remove all even integers, returning only odd integers.
 * 
 * Time Complexity: O(n) where n is the length of the input array
 * Space Complexity: O(k) where k is the number of odd integers in the array
 * 
 * @param {number[]} arr - The input array of integers to filter
 * @returns {number[]} A new array containing only the odd integers
 * 
 * @example
 * removeEven([1, 2, 3, 4, 5]); // returns [1, 3, 5]
 * removeEven([2, 4, 6]); // returns []
 * removeEven([]); // returns []
 */

export function removeEven(arr: number[]): number [] {
    if (!arr.length) return [];

    return arr.filter((el: number) => el % 2 !== 0);
}


