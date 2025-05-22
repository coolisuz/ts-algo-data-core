/**
 * A generic hash table implementation with separate chaining for collision resolution.
 * Uses an array of linked lists to handle collisions and automatically resizes when needed.
 *
 * @typeparam T - The type of data stored in the hash table
 */
import { HashEntry } from "./hash-entry";

/**
 * A generic hash table implementation with separate chaining for collision resolution
 * @template T The type of data stored in the hash table
 */
export class HashTable<T> {
    /** Number of available slots in the hash table */
    private slots: number;

    /** Current number of elements stored in the hash table */
    private size: number;

    /** Array of hash entries forming the hash table buckets */
    private bucket: Array<HashEntry<T> | null>;

    /**
     * Creates a new hash table with the specified number of slots
     *
     * @time O(n) - Where n is the number of slots
     * @space O(n) - Creates array of n slots
     * @param {number} slots - Number of slots to initialize (default: 10)
     */
    constructor(slots: number = 10) {
        this.slots = slots;
        this.size = 0;
        this.bucket = [];

        for (var i = 0; i < this.slots; i++) {
            this.bucket[i] = null;
        }
    }

    /**
     * Returns the current number of elements in the hash table
     *
     * @time O(1) - Constant time operation using cached count
     * @space O(1) - No extra space used
     * @returns {number} The number of elements stored
     */
    getSize(): number {
        return this.size;
    }

    /**
     * Checks if the hash table is empty
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {boolean} True if the hash table is empty, false otherwise
     */
    isEmpty(): boolean {
        return this.getSize() === 0;
    }

    /**
     * Computes the hash index for a given key using modulo operation
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @param {number} key - The key to hash
     * @returns {number} The computed hash index
     */
    getIndex(key: number): number {
        let index = key % this.slots;

        return index;
    }

    /**
     * Resizes the hash table by doubling the number of slots and rehashing all elements.
     * This helps maintain good performance by reducing collisions as the table grows.
     *
     * @time O(n) - Where n is the number of elements to rehash
     * @space O(m) - Where m is the new number of slots (double the previous)
     */
    resize(): void {
        const oldBucket = this.bucket;
        const oldSlots = this.slots;

        this.slots = oldSlots * 2;
        this.size = 0;

        this.bucket = [];
        for (let i = 0; i < this.slots; i++) {
            this.bucket[i] = null;
        }

        for (let i = 0; i < oldSlots; i++) {
            let current = oldBucket[i];

            while (current !== null) {
                const next = current.next;
                current.next = null;
                const newIndex = this.getIndex(current.key);

                if (this.bucket[newIndex] === null) {
                    this.bucket[newIndex] = current;
                } else {
                    let chainCurrent = this.bucket[newIndex];
                    while (
                        chainCurrent !== null &&
                        chainCurrent.next !== null
                    ) {
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
