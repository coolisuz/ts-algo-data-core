/**
 * AVL Node class for self-balancing binary search tree.
 */

import { IAVLTree, IBinaryTreeNode } from "../interfaces/tree.interface";

export class AVLNode<T> implements IBinaryTreeNode<T> {
    public leftChild: AVLNode<T> | null;
    public rightChild: AVLNode<T> | null;
    public height: number;

    constructor(public val: T) {
        this.leftChild = null;
        this.rightChild = null;
        this.height = 1;
    }
}

/**
 * AVL Tree class implementing a self-balancing binary search tree.
 * Maintains balance to ensure O(log n) operations.
 *
 * @typeparam T - The type of elements stored in the AVL tree
 */
export class AVLTree<T> implements IAVLTree<T> {
    root: AVLNode<T> | null;

    /**
     * Creates a new AVL tree
     */
    constructor() {
        this.root = null;
    }
    /**
     * Gets the height of a node (null nodes have height 0)
     * @param {AVLNode<T> | null} node - The node to get the height of
     * @returns {number} The height of the node
     */
    public getHeight(node: AVLNode<T> | null): number {
        return node ? node.height : 0;
    }
}
