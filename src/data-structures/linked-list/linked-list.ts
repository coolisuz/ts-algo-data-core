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




    /** Finds and deletes the value from the list
     * @time O(n) - Requires traversing entire list in worst case scenario
     * @space O(1) - No extra space used, (constants dropped)
     * @returns boolean
     */
    deleteByValue(value: T): boolean {
        if (!this.head) return false;
    
        if (this.head.data === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
    
        let current = this.head;
        while (current.next) {
            if (current.next.data === value) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    /**
     * Deletes the head node of the list
     * @time O(1) - Constant time operation
     * @space O(1) - No extra space used
     * @returns The list for method chaining
     */
    deleteAtHead(): LinkedList<T> {
        if (!this.head) return this;
        
        this.head = this.head.next;
        this.size--;
        return this;
    }

    /**
     * Deletes the tail node of the list
     * @time O(n) - Requires traversing to the end of the list
     * @space O(1) - No extra space used
     * @returns The list for method chaining
     */
    deleteAtTail(): LinkedList<T> {
        if (!this.head) return this;

        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;

            while (current.next !== null && current.next.next !== null) {
                current = current.next;
            }
            current.next = null;
        }
        
        this.size--;
        return this;
    }


    /**
     * Returns the number of nodes in the list
     * @time O(1) - Uses stored size value
     * @space O(1) - No additional space needed
     * @returns The number of nodes
     */
    length(): number {
        return this.size;
    }
}
