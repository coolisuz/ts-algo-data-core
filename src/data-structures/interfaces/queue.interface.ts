export interface IQueue<T> {
    isEmpty(): boolean;
    getFront(): T | undefined;
    size(): number;
    enqueue(data: T): IQueue<T>;
    dequeue(): T | undefined;
    getTail(): T | undefined;
    clear(): IQueue<T>;
}
