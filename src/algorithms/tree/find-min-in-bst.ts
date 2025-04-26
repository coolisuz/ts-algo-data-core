/**
 * Finds the minimum value in a Binary Search Tree.
 *
 * @timeComplexity O(h) where h is the height of the tree; average case O(log n), worst case O(n) for skewed trees.
 * @spaceComplexity O(1) as no extra space is used.
 *
 * @param {Node<number> | null} root - The root node of the Binary Search Tree
 * @returns {number | null} - The minimum value in the BST or null if the tree is empty
 *
 * @constraints
 * - 0 ≤ n ≤ 500 (number of nodes)
 * - -10^4 ≤ Node.data ≤ 10^4
 */

import { Node } from "../../data-structures/tree";

export function findMinimum(root: Node<number> | null): number | null {
    if (root === null) {
        return null;
    }

    let current: Node<number> | null = root;
    while (current?.leftChild !== null) {
        current = current.leftChild;
    }

    return current.val;
}
