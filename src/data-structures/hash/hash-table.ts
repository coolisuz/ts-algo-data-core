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
     * Inserts a key-value pair into the hash table or updates existing value.
     * Uses separate chaining to handle collisions by maintaining linked lists in each bucket.
     *
     * @time O(1) average case, O(n) worst case where n is the length of the chain
     * @space O(1) - Only creates one new entry if needed
     * @param {number} key - The key to insert or update
     * @param {T} value - The value to associate with the key
     */
    insert(key: number, value: T): void {
        const index = this.getIndex(key);

        if (this.bucket[index] === null) {
            this.bucket[index] = new HashEntry(key, value);
            this.size++;
        } else {
            let head: HashEntry<T> | null = this.bucket[index];

            while (head !== null) {
                if (head.key === key) {
                    head.data = value;
                    return;
                }
                head = head.next;
            }

            const newEntry = new HashEntry(key, value);
            newEntry.next = this.bucket[index];
            this.bucket[index] = newEntry;
            this.size++;
        }
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

    /**
     * Searches for a key in the hash table and returns its associated value.
     * Traverses the chain in case of collisions to find the exact key match.
     *
     * @time O(1) average case, O(n) worst case where n is the length of the chain
     * @space O(1) - No extra space used
     * @param {number} key - The key to search for
     * @returns {T | undefined} The value associated with the key or undefined if not found
     */
    search(key: number): T | undefined {
        const index = this.getIndex(key);
        let current = this.bucket[index];

        while (current !== null) {
            if (current.key === key) {
                return current.data;
            }
            current = current.next;
        }

        return undefined;
    }
}
