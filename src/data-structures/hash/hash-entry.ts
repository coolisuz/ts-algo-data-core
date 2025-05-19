/**
 * A generic hash table entry that can store key-value pairs with chaining support
 * @template T The type of data stored in this entry
 */
export class HashEntry<T> {
    readonly key: number;
    readonly data: T;
    next: HashEntry<T> | null;

    constructor(key: number, data: T) {
        this.key = key;
        this.data = data;
        this.next = null;
    }
}
