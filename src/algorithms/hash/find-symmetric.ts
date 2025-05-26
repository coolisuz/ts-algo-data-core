/**
 * Given an array of pairs, finds all symmetric pairs in the array.
 * Two pairs [a,b] and [c,d] are symmetric if a = d and b = c.
 *
 * @time O(n²) - where n is the number of pairs (brute force approach)
 * @space O(k) - where k is the number of symmetric pairs found
 *
 * @param {T[][]} arr - The input array of pairs
 * @returns {T[][]} - Array containing all symmetric pairs found
 */
export function findSymmetric<T>(arr: T[][]): T[][] {
    const result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const symmetric = [arr[i][1], arr[i][0]];

        for (let j = i + 1; j < arr.length; j++) {
            if (symmetric[0] === arr[j][0] && symmetric[1] === arr[j][1]) {
                result.push(symmetric);
                result.push(arr[j]);
            }
        }
    }

    return result;
}
