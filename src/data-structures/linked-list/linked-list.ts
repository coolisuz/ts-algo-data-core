/**
 * A singly linked list implementation providing standard list operations.
 *
 * @typeparam T - The type of elements stored in the linked list
 */
import { Node } from "./node.ts";

export class LinkedList<T> {
    /** Head node of the list */
    private head: Node<T> | null;

    /** Number of elements in the list */
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Appends a value to the end of the list.
     *
     * @time O(n) - Requires traversing to the end of the list
     * @space O(1) - No extra space used
     * @returns The list for method chaining
     */
    append(data: T): LinkedList<T> {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.size++;
            return this;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
        this.size++;

        return this;
    }

    /** Returns the number of elements in the list */
    getSize(): number {
        return this.size;
    }

    /** Finds the value in the list
     * @time O(n) - Requires traversing to the end of the list
     * @space O(1) - No extra space used
     * @returns boolean
     */
    search(value: T): boolean {
        let current = this.head;

        while (current !== null) {
            if (current.data === value) {
                return true;
            }

            current = current.next;
        }

        return false;
    }
}
