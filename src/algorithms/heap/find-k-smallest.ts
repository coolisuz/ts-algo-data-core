import { MaxHeap } from "../../data-structures/heaps";

/**
 * Finds the k smallest elements from an unsorted array using a Max Heap
 *
 * Uses a max heap of size k to efficiently find the k smallest elements.
 * The algorithm maintains a max heap where the largest element among the
 * k smallest is always at the root, allowing efficient comparison and replacement.
 *
 * @time O(n log k) - For each of n elements, we may perform heap operations of O(log k)
 * @space O(k) - Max heap stores at most k elements
 * @param {number[]} arr - The unsorted input array
 * @param {number} k - The number of smallest elements to find
 * @returns {number[]} Array containing the k smallest elements (not necessarily sorted)
 * @throws {Error} If k is greater than array length or if k is less than 1
 * @example
 * // Find 3 smallest elements
 * const arr = [7, 10, 4, 3, 20, 15];
 * const result = findKSmallest(arr, 3);
 * console.log(result); // [4, 3, 7] (order may vary)
 */
export function findKSmallest(arr: number[], k: number): number[] {
    if (k < 1) {
        throw new Error("k must be at least 1");
    }
    if (k > arr.length) {
        throw new Error("k cannot be greater than array length");
    }

    if (arr.length === 0) {
        return [];
    }

    const maxHeap = new MaxHeap<number>();

    for (const num of arr) {
        if (maxHeap.elements < k) {
            maxHeap.insert(num);
        } else {
            const maxElement = maxHeap.getMax();
            if (maxElement !== null && num < maxElement) {
                maxHeap.removeMax();
                maxHeap.insert(num);
            }
        }
    }

    const result: number[] = [];
    while (maxHeap.elements > 0) {
        const element = maxHeap.removeMax();
        if (element !== null) {
            result.push(element);
        }
    }

    return result;
}
