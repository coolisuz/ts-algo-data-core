/**
 * A singly linked list implementation providing standard list operations.
 *
 * @typeparam T - The type of elements stored in the linked list
 */
import { ILinkedList } from "../interfaces/index.ts";
import { Node } from "./node.ts";

export class LinkedList<T> implements ILinkedList<T> {
    /** Head node of the list */
    private head: Node<T> | null;

    /** Number of elements in the list */
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Appends a value to the front of the list.
     *
     * @time O(1) - No traversing the list requiered
     * @space O(1) - No extra space used
     * @returns {LinkedList<T>} The modified list instance for method chaining
     */
    prepend(data: T): LinkedList<T> {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
        return this;
    }

    /**
     * Appends a value to the end of the list.
     *
     * @time O(n) - Requires traversing to the end of the list
     * @space O(1) - No extra space used
     * @returns {LinkedList<T>} The modified list instance for method chaining
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
     * @returns {LinkedList<T>} The modified list instance for method chaining
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
     * @returns {LinkedList<T>} The modified list instance for method chaining
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

    /**
     * Deletes the duplicate node of the list
     * @time O(n) - Requires traversing to the end of the list
     * @space O(n) - Worst case requires storing all unique values in Set
     * @returns {LinkedList<T>} The modified list instance for method chaining
     */
    removeDuplicate(): LinkedList<T> {
        if (!this.head) return this;

        const seenValues = new Set<T>();
        let previous: Node<T> | null = null;
        let current = this.head;

        while (current !== null) {
            if (seenValues.has(current.data)) {
                if (previous) previous.next = current.next;

                this.size--;
            } else {
                seenValues.add(current.data);
                previous = current;
            }

            current = current.next as Node<T>;
        }
        return this;
    }

    /**
     * Return head node of the list
     * @time O(1) - Accesses only the head
     * @space O(1) - No extra space used
     * @returns {Node<T>} The head node of the List
     */
    getHead(): Node<T> | null {
        return this.head;
    }

    /**
     * Create a uniq nodes out of two List heads
     * @param {Node<T>} head1 - The head of a Linked List
     * @param {Node<T>} head2 - The head of a Linked List
     * @time O(n+m) - Requires traversing to the end of the Head node where n = head1 and m = head2
     * @space O(n) - Where n is the number of unique nodes.
     * @returns {LinkedList<T>} The new list instance
     */
    union(head1: Node<T>, head2: Node<T>): LinkedList<T> {
        const uniqueNodes = new Set<T>();
        findUniqueNode(head1);
        findUniqueNode(head2);

        const newList = new LinkedList<T>();

        uniqueNodes.forEach((node) => newList.append(node));

        function findUniqueNode(head: Node<T>): void {
            if (!head) return;

            let current: Node<T> | null = head;

            while (current !== null) {
                if (!uniqueNodes.has(current.data)) {
                    uniqueNodes.add(current.data);
                }

                current = current.next;
            }

            return;
        }

        return newList;
    }

    /**
     * Create a common nodes in two List heads
     * @time O(n+m) - Requires traversing to the end of the Head node where n = head1 and m = head2
     * @space O(n) - Where n is the number of common nodes.
     * @returns {LinkedList<T>} The new list instance
     */
    intersection(head1: Node<T>, head2: Node<T>): LinkedList<T> {
        const frequencyMap = new Map();
        findUniqueNode(head1);
        findUniqueNode(head2);

        const newList = new LinkedList<T>();

        frequencyMap.forEach((count, data) => {
            if (count > 1) newList.append(data);
        });

        function findUniqueNode(head: Node<T>): void {
            if (!head) return;

            let current: Node<T> | null = head;

            while (current !== null) {
                const currentValue = frequencyMap.get(current.data) ?? 0;
                frequencyMap.set(current.data, currentValue + 1);

                current = current.next;
            }

            return;
        }

        return newList;
    }

    /**
     * Find nth Node from the back
     * @param {number} n - Target node number from the back of the Linked List
     * @time O(n) - Requires traversing the entire list once
     * @space O(1) - No extra space used
     * @returns {T | null} - Returns the data of the target node or null
     */
    findNthFromBack(n: number): T | null {
        if (!this.head || n <= 0) {
            return null;
        }

        let fast: Node<T> | null = this.head;
        let slow: Node<T> | null = this.head;

        for (let i = 0; i < n; i++) {
            if (!fast) return null;
            fast = fast.next;
        }

        while (fast) {
            slow = slow!.next;
            fast = fast.next;
        }

        return slow!.data;
    }
}
