import { HashEntry } from "./hash-entry";

/**
 * A generic hash table implementation with separate chaining for collision resolution
 * @template T The type of data stored in the hash table
 */
export class HashTable<T> {
    private readonly slots: number;
    private size: number;
    private bucket: Array<HashEntry<T> | null>;

    constructor(slots: number = 10) {
        this.slots = slots;
        this.size = 0;
        this.bucket = [];

        for (var i = 0; i < this.slots; i++) {
            this.bucket[i] = null;
        }
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.getSize() === 0;
    }
}
