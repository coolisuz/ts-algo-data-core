import { IMinHeap } from "../interfaces";
export class MinHeap<T extends number | string> implements IMinHeap<T> {
    heaps: T[];
    elements: number;

    constructor() {
        this.heaps = [];
        this.elements = 0;
    }

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

    getMin(): T | null {
        if (this.heaps.length != 0) {
            return this.heaps[0];
        }

        return null;
    }

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

    private percolateUp(index: number): void {
        index;
    }

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

    buildHeap(arr: T[]): void {
        this.heaps = arr;
        this.elements = this.heaps.length;
        
        for (let i = this.heaps.length - 1; i >= 0; i--) {
            this.minHeapify(i);
        }
    }
}
