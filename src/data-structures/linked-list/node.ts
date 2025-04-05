/**
 * Represents a node in a singly linked list.
 *
 * @typeparam T - The type of data stored in the node
 */
export class Node<T> {
    /** The data stored in this node */
    data: T;

    /** Reference to the next node, or null if this is the last node */
    next: Node<T> | null;

    /**
     * Creates a new node.
     *
     * @param data - The data to store in this node
     */
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}
