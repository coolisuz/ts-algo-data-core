/**
 * Max Heap implementation using array-based binary tree
 * Maintains the max-heap property where parent nodes are greater than their children
 *
 * @typeparam T - The type of elements stored in the heap (must be comparable: number | string)
 */
import { IMaxHeap } from "../interfaces";

export class MaxHeap<T extends number | string> implements IMaxHeap<T> {
    /** Internal array to store heap elements */
    heap: T[];
    /** Number of elements currently in the heap */
    elements: number;

    constructor() {
        this.heap = [];
        this.elements = 0;
    }

    /**
     * Inserts a new value into the heap and maintains max-heap property
     *
     * @time O(log n) - Height of the tree for percolation up
     * @space O(1) - Only uses constant extra space
     * @param {T} val - The value to be inserted
     * @returns {void}
     */
    insert(val: T): void {
        if (this.elements >= this.heap.length) {
            this.elements = this.elements + 1;
            this.heap.push(val);
            this.percolateUp(this.heap.length - 1);
        } else {
            this.heap[this.elements] = val;
            this.elements = this.elements + 1;
            this.percolateUp(this.heap.length - 1);
        }
    }

    /**
     * Returns the maximum value in the heap without removing it
     *
     * @time O(1) - Constant time operation to access root
     * @space O(1) - No extra space used
     * @returns {T | null} The maximum value or null if heap is empty
     */
    getMax(): null | T {
        if (this.elements != 0) {
            return this.heap[0];
        }

        return null;
    }

    /**
     * Removes and returns the maximum value from the heap
     *
     * @time O(log n) - Height of the tree for heapify operation
     * @space O(1) - Only uses constant extra space
     * @returns {T | null} The removed maximum value or null if heap is empty
     */
    removeMax(): T | null {
        if (this.elements > 1) {
            const maxHeap = this.heap[0];
            this.heap[0] = this.heap[this.elements - 1];
            this.elements = this.elements - 1;
            this.maxHeapify(0);
            return maxHeap;
        } else if (this.elements === 1) {
            const maxHeap = this.heap[0];
            this.elements = this.elements - 1;
            return maxHeap;
        } else {
            return null;
        }
    }

    /**
     * Moves an element up the heap to maintain max-heap property
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
        } else if (this.heap[parent] < this.heap[index]) {
            const temp = this.heap[parent];
            this.heap[parent] = this.heap[index];
            this.heap[index] = temp;
            this.percolateUp(parent);
        }
    }

    /**
     * Restores the max-heap property by moving an element down the heap
     *
     * @time O(log n) - Height of the tree in worst case
     * @space O(log n) - Recursive call stack depth
     * @param {number} index - The index of the element to heapify
     * @returns {void}
     */
    private maxHeapify(index: number): void {
        let left = index * 2 + 1;
        let right = index * 2 + 2;
        let largest = index;

        if (this.elements > left && this.heap[largest] < this.heap[left]) {
            largest = left;
        }

        if (this.elements > right && this.heap[largest] < this.heap[right]) {
            largest = right;
        }

        if (largest !== index) {
            const temp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = temp;
            this.maxHeapify(largest);
        }
    }

    /**
     * Builds a max heap from an existing array of elements
     *
     * @time O(n) - Linear time using bottom-up heapification
     * @space O(1) - Only uses constant extra space (excluding input array)
     * @param {T[]} arr - The array to convert into a heap
     * @returns {void}
     */
    buildHeap(arr: T[]): void {
        this.heap = arr;
        this.elements = this.heap.length;

        for (var i = this.heap.length - 1; i >= 0; i--) {
            this.maxHeapify(i);
        }
    }
}
