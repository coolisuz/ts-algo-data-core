/**
 * Linked List based Stack implementation
 *
 * @typeparam T - The type of elements stored in the stacked linked list
 */
import { IStack } from "../interfaces/index";
import { Node } from "../linked-list/node";

export class StackLinkedList<T> implements IStack<T> {
    /** Head node of the stack */
    private head: Node<T> | null;

    /** Number of nodes in the stack */
    private count: number;

    constructor() {
        this.head = null;
        this.count = 0;
    }

    /**
     * Adds a new element to the top of the Stack
     *
     * @time O(1) - Constant time operation
     * @space O(1) - Only creates one new node
     * @param {T} value - Value to be added to the stack
     * @returns {StackLinkedList<T>} - The modified stack instance for method chaining
     */
    push(value: T): StackLinkedList<T> {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.count++;
        return this;
    }

    /**
     * Removes and returns the top element of the stack
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {T | undefined} - Value of the removed element, or undefined if stack is empty
     */
    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        const value = this.head!.data;
        this.head = this.head!.next;
        this.count--;
        return value;
    }

    /**
     * Returns the top element without removing it
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {T | undefined} - Value of the top element, or undefined if stack is empty
     */
    peek(): T | undefined {
        return this.isEmpty() ? undefined : this.head!.data;
    }

    /**
     * Checks if the Stack is empty
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {boolean} - True if stack is empty, false otherwise
     */
    isEmpty(): boolean {
        return this.count === 0;
    }

    /**
     * Returns the number of elements in the Stack
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {number} - Number of elements in the stack
     */
    size(): number {
        return this.count;
    }

    /**
     * Empties the entire Stack
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns {StackLinkedList<T>} - The modified stack instance for method chaining
     */
    clear(): StackLinkedList<T> {
        this.head = null;
        this.count = 0;
        return this;
    }
}
