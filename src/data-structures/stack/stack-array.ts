/**
 * Array-based Stack implementation
 *
 * @typeparam T - The type of elements stored in the stack
 */

import { IStack } from "../interfaces/index";

export class Stack<T> implements IStack<T> {
    /** Internal array to store stack elements */
    private items: T[];

    constructor() {
        this.items = [];
    }

    /**
     * Pushes an element onto the stack
     *
     * @time O(1) -  Constant time (occasional resizing may occur)
     * @space O(1) - No extra space used beyond the element being added
     * @param element - The element to push onto the stack
     * @returns The stack instance for method chaining
     */
    push(element: T): Stack<T> {
        this.items.push(element);
        return this;
    }

    /**
     * Removes and returns the top element of the stack
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns The top element, or undefined if stack is empty
     */
    pop(): T | undefined {
        return this.items.pop();
    }

    /**
     * Returns the top element without removing it
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns The top element, or undefined if stack is empty
     */
    peek(): T | undefined {
        return this.isEmpty() ? undefined : this.items[this.items.length - 1];
    }

    /**
     * Checks if the stack is empty
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns True if stack is empty, false otherwise
     */
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    /**
     * Returns the number of elements in the stack
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns The number of elements in the stack
     */
    size(): number {
        return this.items.length;
    }

    /**
     * Removes all elements from the stack
     *
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns The stack instance for method chaining
     */
    clear(): Stack<T> {
        this.items = [];
        return this;
    }
}
