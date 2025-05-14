import { IMaxHeap } from "../interfaces";

export class MaxHeap<T extends number | string> implements IMaxHeap<T> {
    heap: T[];
    elements: number;

    constructor() {
        this.heap = [];
        this.elements = 0;
    }

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

    getMax(): null | T {
        if (this.elements != 0) {
            return this.heap[0];
        }

        return null;
    }

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

    buildHeap(arr: T[]): void {
        this.heap = arr;
        this.elements = this.heap.length;

        for (var i = this.heap.length - 1; i >= 0; i--) {
            this.maxHeapify(i);
        }
    }
}
