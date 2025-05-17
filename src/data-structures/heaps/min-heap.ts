/**
 * Min Heap implementation using array-based binary tree
 * Maintains the min-heap property where parent nodes are smaller than their children
 *
 * @typeparam T - The type of elements stored in the heap (must be comparable: number | string)
 */
import { IMinHeap } from "../interfaces";

export class MinHeap<T extends number | string> implements IMinHeap<T> {
    /** Internal array to store heap elements */
    heaps: T[];
    /** Number of elements currently in the heap */
    elements: number;

    constructor() {
        this.heaps = [];
        this.elements = 0;
    }

    /**
     * Inserts a new value into the heap and maintains min-heap property
     *
     * @time O(log n) - Height of the tree for percolation up
     * @space O(1) - Only uses constant extra space
     * @param {T} val - The value to be inserted
     * @returns {void}
     */
    insert(val: T): void {
        if (this.elements >= this.heaps.length) {
            this.elements = this.elements + 1;
            this.heaps.push(val);
            this.percolateUp(this.heaps.length - 1);
        } else {
            this.heaps[this.elements] = val;
            this.elements = this.elements + 1;
            this.percolateUp(this.heaps.length - 1);
        }
    }

    /**
     * Returns the minimum value in the heap without removing it
     *
     * @time O(1) - Constant time operation to access root
     * @space O(1) - No extra space used
     * @returns {T | null} The minimum value or null if heap is empty
     */
    getMin(): T | null {
        if (this.heaps.length != 0) {
            return this.heaps[0];
        }

        return null;
    }

    /**
     * Removes and returns the minimum value from the heap
     *
     * @time O(log n) - Height of the tree for heapify operation
     * @space O(1) - Only uses constant extra space
     * @returns {T | null} The removed minimum value or null if heap is empty
     */
    removeMin(): T | null {
        if (this.elements > 1) {
            let min = this.heaps[0];
            this.heaps[0] = this.heaps[this.elements - 1];
            this.elements = this.elements - 1;
            this.minHeapify(0);
            return min;
        } else if (this.elements == 1) {
            let min = this.heaps[0];
            this.elements = this.elements - 1;
            return min;
        } else {
            return null;
        }
    }

    /**
     * Moves an element up the heap to maintain min-heap property
     *
     * @time O(log n) - Height of the tree in worst case
     * @space O(log n) - Recursive call stack depth
     * @param {number} index - The index of the element to percolate up
     * @returns {void}
     */
    private percolateUp(index: number): void {
        const parent = Math.floor((index - 1) / 2);

        if (index <= 0) {
            return;
        } else if (this.heaps[parent] > this.heaps[index]) {
            const temp = this.heaps[parent];
            this.heaps[parent] = this.heaps[index];
            this.heaps[index] = temp;
            this.percolateUp(parent);
        }
    }

    /**
     * Restores the min-heap property by moving an element down the heap
     *
     * @time O(log n) - Height of the tree in worst case
     * @space O(log n) - Recursive call stack depth
     * @param {number} index - The index of the element to heapify
     * @returns {void}
     */
    private minHeapify(index: number): void {
        let left = index * 2 + 1;
        let right = index * 2 + 2;
        let smallest = index;

        if (this.elements > left && this.heaps[smallest] > this.heaps[left]) {
            smallest = left;
        }

        if (this.elements > right && this.heaps[smallest] > this.heaps[right]) {
            smallest = right;
        }

        if (smallest != index) {
            let tmp = this.heaps[smallest];
            this.heaps[smallest] = this.heaps[index];
            this.heaps[index] = tmp;
            this.minHeapify(smallest);
        }
    }

    /**
     * Builds a min heap from an existing array of elements
     *
     * @time O(n) - Linear time using bottom-up heapification
     * @space O(1) - Only uses constant extra space (excluding input array)
     * @param {T[]} arr - The array to convert into a heap
     * @returns {void}
     */
    buildHeap(arr: T[]): void {
        this.heaps = arr;
        this.elements = this.heaps.length;

        for (let i = this.heaps.length - 1; i >= 0; i--) {
            this.minHeapify(i);
        }
    }
}
