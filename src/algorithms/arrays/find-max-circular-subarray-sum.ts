/**
 * Finds the maximum sum of a circular subarray
 * A circular subarray can wrap around the array
 * @param arr - The input array
 * @returns The maximum sum of a circular subarray
 * @time O(n) where n is the length of the array
 * @space O(1) as we only use a few variables
 */
export function maxCircularSubarraySum(arr: number[]): number {
    if (arr.length === 0) return 0;

    // Find maximum sum of normal subarray using Kadane's algorithm
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let totalSum = arr[0];

    let minSoFar = arr[0];
    let minEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);

        minEndingHere = Math.min(arr[i], minEndingHere + arr[i]);
        minSoFar = Math.min(minSoFar, minEndingHere);

        totalSum += arr[i];
    }

    if (totalSum === minSoFar) {
        return maxSoFar;
    }

    return Math.max(maxSoFar, totalSum - minSoFar);
}
