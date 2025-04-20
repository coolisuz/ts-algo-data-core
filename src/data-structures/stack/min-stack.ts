/**
 * MinStack is a special stack data structure that supports standard stack operations
 * while also providing access to the minimum element in constant time.
 *
 * Time Complexity:
 * - push: O(1)
 * - pop: O(1)
 * - min: O(1)
 * - peek: O(1)
 *
 * Space Complexity: O(n) where n is the number of elements in the stack
 *
 * @typeparam T - The type of elements stored in the stack (must extend number)
 */
import { IMinStack } from "../interfaces/index";
import { StackLinkedList } from "./stack-linked-list";

export class MinStack<T extends number> implements IMinStack<T> {
    private stack: StackLinkedList<T>;
    private minStack: StackLinkedList<T>;

    constructor() {
        this.stack = new StackLinkedList<T>();
        this.minStack = new StackLinkedList<T>();
    }

    push(value: T): void {
        this.stack.push(value);

        if (this.minStack.isEmpty() || value <= this.minStack.peek()!) {
            this.minStack.push(value);
        }
    }

    pop(): T | undefined {
        const popped = this.stack.pop();

        if (popped !== undefined && popped === this.minStack.peek()) {
            this.minStack.pop();
        }

        return popped;
    }

    min(): T | undefined {
        return this.minStack.peek();
    }

    peek(): T | undefined {
        return this.stack.peek();
    }

    isEmpty(): boolean {
        return this.stack.isEmpty();
    }

    size(): number {
        return this.stack.size();
    }
}
