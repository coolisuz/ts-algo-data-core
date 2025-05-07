/**
 * Finds the smallest subarray with sum greater than or equal to target
 * @param arr - The input array of positive numbers
 * @param target - The target sum
 * @returns The length of the smallest subarray with sum >= target or 0 if not found
 * @time O(n) where n is the length of the array
 * @space O(1) as only used a few variables
 */
export function smallestSubarrayWithSum(arr: number[], target: number): number {
    let minLength = Infinity;
    let windowSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        windowSum += arr[end];

        while (windowSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            windowSum -= arr[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}
