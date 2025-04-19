/**
 * A Binary Search Tree implementation that maintains the BST property:
 * - Values in left subtree are less than node's value
 * - Values in right subtree are greater than node's value
 *
 * @typeparam T - The type of elements stored in the binary search tree
 */

import { Node } from "./node.ts";
import { IBinarySearchTree } from "../interfaces/index.ts";

export class BST<T> implements IBinarySearchTree<T> {
    /** Root node of the tree */
    root: Node<T> | null;

    /**
     * Creates a new Binary Search Tree
     *
     * @param {T} rootValue - Optional initial value for the root node
     */
    constructor(rootValue?: T) {
        this.root = rootValue !== undefined ? new Node(rootValue) : null;
    }

    insert(value: T): void {
        console.log(value);
    }
}
