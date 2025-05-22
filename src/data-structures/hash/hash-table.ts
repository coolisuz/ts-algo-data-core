import { HashEntry } from "./hash-entry";

/**
 * A generic hash table implementation with separate chaining for collision resolution
 * @template T The type of data stored in the hash table
 */
export class HashTable<T> {
    private slots: number;
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

    getIndex(key: number): number {
        let index = key % this.slots;

        return index;
    }
    
    resize(): void {
        const oldBucket = this.bucket;
        const oldSlots = this.slots;

        this.slots = oldSlots * 2;
        this.size = 0;

        this.bucket = [];
        for (var i = 0; i < this.slots; i++) {
            this.bucket[i] = null;
        }

        for (var i = 0; i < oldSlots; i++) {
            let current = oldBucket[i];
            
            while (current !== null) {
                const next = current.next;
                current.next = null;
                const newIndex = this.getIndex(current.key);
                
                if (this.bucket[newIndex] === null) {
                    this.bucket[newIndex] = current;
                } else {
                    let chainCurrent = this.bucket[newIndex];
                    while (chainCurrent !== null && chainCurrent.next !== null) {
                        chainCurrent = chainCurrent.next;
                    }

                    if (chainCurrent !== null) {
                        chainCurrent.next = current;
                    }
                }

                this.size++;
                current = next;
            }
        }
    }
}
