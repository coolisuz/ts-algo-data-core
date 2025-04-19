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

    /**
     * Inserts a new value to the tree
     *
     * @time O(log n) average case (balanced tree), O(n) worst case (unbalanced tree)
     * @space O(1) - No extra space used
     *
     * @param {value} value for the node
     * @returns {BST<T>} The tree instance for method chaining
     */
    insert(value: T): BST<T> {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        }

        let current = this.root;

        while (true) {
            // Go left
            if (value < current.val) {
                if (current.leftChild === null) {
                    current.leftChild = new Node(value);
                    break;
                } else {
                    current = current.leftChild;
                }
            }
            // Go right
            else {
                if (current.rightChild === null) {
                    current.rightChild = new Node(value);
                    break;
                } else {
                    current = current.rightChild;
                }
            }
        }

        return this;
    }

    /**
     * Prints a visual representation of the tree to the console (top to bottom)
     *
     * @time O(n) - Visits each node once
     * @space O(h) - Space complexity depends on the height of the tree
     * @returns {BST<T>} The tree instance for method chaining
     */
    print(): BST<T> {
        if (this.root === null) {
            console.log("Empty tree");
            return this;
        }

        const getHeight = (node: Node<T> | null): number => {
            if (node === null) return 0;
            return (
                1 +
                Math.max(getHeight(node.leftChild), getHeight(node.rightChild))
            );
        };

        const height = getHeight(this.root);
        const width = Math.pow(2, height) * 2 - 1;
        const matrix: string[][] = Array(height)
            .fill(0)
            .map(() => Array(width).fill(" "));

        const fillMatrix = (
            node: Node<T> | null,
            level: number,
            start: number,
            end: number,
        ): void => {
            if (node === null) return;

            const mid = Math.floor((start + end) / 2);
            matrix[level][mid] = String(node.val);

            fillMatrix(node.leftChild, level + 1, start, mid - 1);
            fillMatrix(node.rightChild, level + 1, mid + 1, end);
        };

        fillMatrix(this.root, 0, 0, width - 1);

        for (const row of matrix) {
            console.log(row.join(""));
        }

        return this;
    }
}
