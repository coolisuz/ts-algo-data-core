/**
 * Design a queue data structure using only two stacks and implement the following functions:
 * enqueue(int x): Inserts a value to the back of the queue.
 * dequeue(): Removes and returns the value from the front of the queue.
 *
 * @constraints
 * −10^5 ≤ x ≤ 10^5
 *
 * @typeparam T - The type of elements stored in the stacked queue
 */

import { Stack } from "../../data-structures/stack/index";

export class NewQueue<T> {
    /** Stack like queue */
    private queue: Stack<T>;

    /** Temporary stack */
    private stack: Stack<T>;

    constructor() {
        this.queue = new Stack();
        this.stack = new Stack();
    }

    /**
     * @time O(1) - No extra operation performed
     * @space O(1) - No extra space used
     */
    enqueue(value: T): void {
        this.queue.push(value);
    }

    /**
     * @time O(n) - where n is the number of elements in the stacked queue
     * @space O(n) - extra temporary stack used
     */
    dequeue(): T | undefined {
        if (this.queue.isEmpty()) {
            return undefined;
        }

        while (this.queue.size() > 1) {
            this.stack.push(this.queue.pop() as T);
        }

        const dequeued = this.queue.pop();

        while (!this.stack.isEmpty()) {
            this.queue.push(this.stack.pop() as T);
        }

        return dequeued;
    }

    /**
     * @time O(1) - No extra operation performed
     * @space O(1) - No extra spaced used
     */
    isEmpty(): boolean {
        return this.queue.isEmpty();
    }

    /**
     * @time O(1) - No extra operation performed
     * @space O(1) - No extra spaced used
     */
    size(): number {
        return this.queue.size();
    }
}
