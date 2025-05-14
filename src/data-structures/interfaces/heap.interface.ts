export interface IMaxHeap<T> {
    insert(val: T): void;
    getMax(): null | T;
    removeMax(): T | null;
    buildHeap(arr: T[]): void;
}