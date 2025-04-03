/**
 * Given two integer arrays, nums1 and nums2, of size m and n,
 * respectively, sorted in non-decreasing order. Merge nums1 and nums2
 * into a single array sorted in non-decreasing order.
 *
 * Time complexity: O(n + m) where n is the size of the first array and m is the size of the second array
 * Space complexity: O(n + m) where n is the size of the first array and m is the size of the second array
 *
 * @param {number[]} nums1 - The input array of sorted integers
 * @param {number[]} nums2 - The input array of sorted integers
 * @returns {number[]} - A new array after merging nums1 and nums2
 *
 * @constraints
 * 0 ≤ m, n ≤ 200
 * 1 ≤ m + n ≤ 200
 * -10^3 ≤ nums[i], nums2[i] ≤ 10^3
 *
 * @example
 *
 * mergeSortedArrays([1,2,3], [4,5,6]) // returns [1,2,3,4,5,6]
 * mergeSortedArrays([0,1,4,9], [-111, -20, -5, 5, 11, 20]) // returns [-111, -20, -5, 0, 1, 4, 5, 9, 11, 20]
 */

// Naive approach using bubble sort - O(n²) time complexity, even tho space complexity is constant O(1)
// Kept for comparison purposes to demonstrate algorithmic improvement

// export function mergeSortedArrays(nums1: number[], nums2: number[]): number[] {
//     if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
//         throw new TypeError('Both inputs must be arrays') as never;
//     }

//     const arr = nums1.concat(nums2);

//     for (let i=0; i<arr.length; i++) {
//         for(let j=i+1; j<arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 const temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }

//     return arr;
// }

// Optimized two-pointer approach - O(n+m) time complexity
export function mergeSortedArrays(nums1: number[], nums2: number[]): number[] {
    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        throw new TypeError("Both inputs must be arrays") as never;
    }
    const result = [];
    let p1: number = 0;
    let p2: number = 0;

    while (true) {
        if (p1 >= nums1.length) {
            result.push(...nums2.slice(p2));
            break;
        } else if (p2 >= nums2.length) {
            result.push(...nums1.slice(p1));
            break;
        }

        if (nums1[p1] <= nums2[p2]) {
            result.push(nums1[p1]);
            p1++;
        } else {
            result.push(nums2[p2]);
            p2++;
        }
    }

    return result;
}
