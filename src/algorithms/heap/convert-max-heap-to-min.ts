import { MinHeap } from "../../data-structures/heaps";

/**
 * Converts a max heap array to a min heap array
 * 
 * Takes an array representing a max heap and converts it to an array
 * representing a min heap containing the same elements. The conversion
 * is done using the MinHeap's buildHeap method for optimal performance.
 *
 * @time O(n) - Linear time using bottom-up heapification
 * @space O(n) - Creates a copy of the input array to avoid mutation
 * @param {number[]} maxHeap - The array representing a max heap to convert
 * @returns {number[]} A new array representing a min heap with the same elements
 * @example
 * // Convert a max heap to min heap
 * const maxHeap = [9, 4, 7, 1, -2, 6, 5];
 * const minHeap = convertMax(maxHeap);
 * console.log(minHeap); // [-2, -1, 5, 1, 4, 6, 7] (example min heap structure)
 */
export function convertMax(maxHeap: number[]): number[] {
    const minHeapInstance = new MinHeap<number>();
    
    minHeapInstance.buildHeap([...maxHeap]);
    
    return minHeapInstance.heaps;
}
