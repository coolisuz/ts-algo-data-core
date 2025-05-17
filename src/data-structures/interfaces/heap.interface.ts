export interface IMaxHeap<T> {
    insert(val: T): void;
    getMax(): null | T;
    removeMax(): T | null;
    buildHeap(arr: T[]): void;
}

export interface IMinHeap<T> {
    insert(val: T): void;
    getMin(): null | T;
    removeMin(): T | null;
    buildHeap(arr: T[]): void;
}
