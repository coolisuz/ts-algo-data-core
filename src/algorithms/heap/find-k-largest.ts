import { MinHeap } from "../../data-structures/heaps";

/**
 * Finds the k largest elements from an unsorted array using a Min Heap
 *
 * Uses a min heap of size k to efficiently find the k largest elements.
 * The algorithm maintains a min heap where the smallest element among the
 * k largest is always at the root, allowing efficient comparison and replacement.
 *
 * @time O(n log k) - For each of n elements, we may perform heap operations of O(log k)
 * @space O(k) - Min heap stores at most k elements
 * @param {number[]} arr - The unsorted input array
 * @param {number} k - The number of largest elements to find
 * @returns {number[]} Array containing the k largest elements (not necessarily sorted)
 * @throws {Error} If k is greater than array length or if k is less than 1
 * @example
 * // Find 3 largest elements
 * const arr = [7, 10, 4, 3, 20, 15];
 * const result = findKLargest(arr, 3);
 * console.log(result); // [20, 15, 10] (order may vary)
 */
export function findKLargest(arr: number[], k: number): number[] {
    if (k < 1) {
        throw new Error("k must be at least 1");
    }
    if (k > arr.length) {
        throw new Error("k cannot be greater than array length");
    }

    if (arr.length === 0) {
        return [];
    }

    const minHeap = new MinHeap<number>();

    for (const num of arr) {
        if (minHeap.elements < k) {
            minHeap.insert(num);
        } else {
            const minElement = minHeap.getMin();
            if (minElement !== null && num > minElement) {
                minHeap.removeMin();
                minHeap.insert(num);
            }
        }
    }

    const result: number[] = [];
    while (minHeap.elements > 0) {
        const element = minHeap.removeMin();
        if (element !== null) {
            result.push(element);
        }
    }

    return result;
}
