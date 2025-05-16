export class MinHeap<T extends number | string> {
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

    private percolateUp(index: number): void {
        index;
    }
}
