/**
 * Calculates the height of a Binary Search Tree.
 * The height is defined as the number of edges on the longest path from the root to a leaf.
 *
 * @timeComplexity O(n) where n is the number of nodes in the tree as it need to visit each node once.
 * @spaceComplexity O(h) where h is the height of the tree due to recursive call stack; average case O(log n), worst case O(n) for skewed trees.
 *
 * @param {Node<number> | null} root - The root node of the Binary Search Tree.
 * @returns {number} - The height of the tree; returns 0 for an empty tree.
 *
 * @constraints
 * - 0 ≤ n ≤ 500 (number of nodes)
 * - -10^4 ≤ Node.data ≤ 10^4 (value range for node data)
 */

import { Node } from "../../data-structures/tree";

export function findHeight(root: Node<number> | null): number {
    if (root === null) {
        return 0;
    }

    const leftHeight = findHeight(root.leftChild);
    const rightHeight = findHeight(root.rightChild);

    return Math.max(leftHeight, rightHeight) + 1;
}
