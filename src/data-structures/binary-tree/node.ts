/**
 * Represents a node in a binary tree
 * 
 * @typeparam T - The type of value stored in the node
 */
export class Node<T> {
    /** The value stored in the node */
    val: T;
    
    /** Reference to the left child node or null if no left child exists */
    leftChild: Node<T> | null;
    
    /** Reference to the right child node or null if no right child exists */
    rightChild: Node<T> | null;

    /**
     * Creates a new Node instance
     * 
     * @param {T} value - The value to store in this node
     */
    constructor(value: T) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}