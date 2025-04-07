/**
 * Queue implementation using a Doubly Linked List
 * Follows the First-In-First-Out (FIFO) principle
 *
 * @typeparam T - The type of elements stored in the queue
 */

import { DoublyLinkedList } from "../linked-list/doubley-linked-list.ts";

export class Queue<T> {
    /** Internal doubly linked list to store queue elements */
    private queue: DoublyLinkedList<T>;

    constructor() {
        this.queue = new DoublyLinkedList();
    }

    /**
     * Checks if the queue is empty
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {boolean} True if the queue is empty false otherwise
     */
    isEmpty() {
        return this.queue.isEmpty();
    }

    /**
     * Returns the value at the front of the queue
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {T | undefined} The front value or undefined if list is empty
     */
    getFront(): T | undefined {
        return this.queue.peekFront();
    }

    /**
     * Returns the number of nodes in the list
     *
     * @time O(1) - Constant time operation using cached count
     * @space O(1) - No extra space used
     * @returns {number} The number of nodes
     */
    size() {
        return this.queue.size();
    }

    /**
     * Adds a value to the end of the queue
     *
     * @time O(1) - Constant time operation with tail reference
     * @space O(1) - Only creates one new node
     * @param {T} data - The value to be appended
     * @returns {Queue<T>} The modified list instance for method chaining
     */
    enqueue(data: T): Queue<T> {
        this.queue.append(data);
        return this;
    }

    /**
     * Removes and returns the value from the front of the queue
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {T | undefined} The removed value or undefined if queue is empty
     */
    dequeue(): T | undefined {
        return this.queue.removeFromFront();
    }

    /**
     * Returns the value at the end of the queue without removing it
     *
     * @time O(1) - Constant time operation with tail reference
     * @space O(1) - No extra space used
     * @returns {T | undefined} The end value or undefined if queue is empty
     */
    getTail(): T | undefined {
        if (!this.isEmpty()) {
            return this.queue.peekEnd();
        }
        return undefined;
    }

    /**
     * Removes all nodes from the queue
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {DoublyLinkedList<T>} The modified queue instance for method chaining
     */
    clear(): Queue<T> {
        this.queue.clear();
        return this;
    }
}
