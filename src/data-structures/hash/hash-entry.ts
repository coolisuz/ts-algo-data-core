import { IHashEntry } from "../interfaces";

/**
 * A generic hash table entry that can store key-value pairs with chaining support
 * @template T The type of data stored in this entry
 */
export class HashEntry<T> implements IHashEntry<T> {
    readonly key: number;
    data: T;
    next: HashEntry<T> | null;

    constructor(key: number, data: T) {
        this.key = key;
        this.data = data;
        this.next = null;
    }
}
