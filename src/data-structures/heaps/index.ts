export class maxHeap {
    heap: number[];
    elements: number;

    constructor() {
        this.heap = [];
        this.elements = 0;
    }

    insert(val: number): void {
        if (this.elements >= this.heap.length) {
            this.elements = this.elements + 1;
            this.heap.push(val);
            this.__percolateUp(this.heap.length - 1);
        } else {
            this.heap[this.elements] = val;
            this.elements = this.elements + 1;
            this.__percolateUp(this.heap.length - 1);
        }
    }

    getMax(): null | number {
        if (this.elements != 0) {
            return this.heap[0];
        }

        return null;
    }

    removeMax(): number | null {
        if (this.elements > 1) {
            const maxHeap = this.heap[0];
            this.heap[0] = this.heap[this.elements - 1];
            this.elements = this.elements - 1;
            this.__maxHeapify(0);
            return maxHeap;
        } else if (this.elements === 1) {
            const maxHeap = this.heap[0];
            this.elements = this.elements - 1;
            return maxHeap;
        } else {
            return null;
        }
    }

    __percolateUp(index: number): void {
        const parent = Math.floor((index - 1) / 2);

        if (index <= 0) {
            return;
        } else if (this.heap[parent] < this.heap[index]) {
            const temp = this.heap[parent];
            this.heap[parent] = this.heap[index];
            this.heap[index] = temp;
            this.__percolateUp(parent);
        }
    }

    __maxHeapify(index: number): number {
        return index;
    }
}
