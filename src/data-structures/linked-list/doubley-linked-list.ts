/**
 * A doubly linked list implementation providing efficient operations at both ends.
 *
 * @typeparam T - The type of elements stored in the doubly linked list
 */
import { IDoublyLinkedList } from "../interfaces/index.ts";
import { DoublyNode } from "./node.ts";

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
    /** Head node of the list */
    private head: DoublyNode<T> | null;

    /** Tail node of the list */
    private tail: DoublyNode<T> | null;

    /** Number of nodes in the list */
    private count: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    /**
     * Appends a value to the end of the list
     *
     * @time O(1) - Constant time operation with tail reference
     * @space O(1) - Only creates one new node
     * @param {T} data - The value to be appended
     * @returns {DoublyLinkedList<T>} The modified list instance for method chaining
     */
    append(data: T): DoublyLinkedList<T> {
        const newNode = new DoublyNode(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }

        this.count++;
        return this;
    }

    /**
     * Adds a value to the beginning of the list
     *
     * @time O(1) - Constant time operation
     * @space O(1) - Only creates one new node
     * @param {T} data - The value to be prepended
     * @returns {DoublyLinkedList<T>} The modified list instance for method chaining
     */
    prepend(data: T): DoublyLinkedList<T> {
        const newNode = new DoublyNode(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.count++;
        return this;
    }

    /**
     * Removes and returns the value from the front of the list
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {T | undefined} The removed value or undefined if list is empty
     */
    removeFromFront(): T | undefined {
        if (!this.head) return undefined;

        const data = this.head.data;

        if (this.head === this.tail) {
            // Only one node in the list
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        }

        this.count--;
        return data;
    }

    /**
     * Removes and returns the value from the end of the list
     *
     * @time O(1) - Constant time operation with tail reference
     * @space O(1) - No extra space used
     * @returns {T | undefined} The removed value or undefined if list is empty
     */
    removeFromEnd(): T | undefined {
        if (!this.tail) return undefined;

        const data = this.tail.data;

        if (this.head === this.tail) {
            // Only one node in the list
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        }

        this.count--;
        return data;
    }

    /**
     * Returns the value at the front of the list without removing it
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {T | undefined} The front value or undefined if list is empty
     */
    peekFront(): T | undefined {
        return this.head?.data;
    }

    /**
     * Returns the value at the end of the list without removing it
     *
     * @time O(1) - Constant time operation with tail reference
     * @space O(1) - No extra space used
     * @returns {T | undefined} The end value or undefined if list is empty
     */
    peekEnd(): T | undefined {
        return this.tail?.data;
    }

    /**
     * Checks if the list is empty
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {boolean} True if the list is empty false otherwise
     */
    isEmpty(): boolean {
        return this.count === 0;
    }

    /**
     * Returns the number of nodes in the list
     *
     * @time O(1) - Constant time operation using cached count
     * @space O(1) - No extra space used
     * @returns {number} The number of nodes
     */
    size(): number {
        return this.count;
    }

    /**
     * Removes all nodes from the list
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {DoublyLinkedList<T>} The modified list instance for method chaining
     */
    clear(): DoublyLinkedList<T> {
        this.head = null;
        this.tail = null;
        this.count = 0;
        return this;
    }
}
