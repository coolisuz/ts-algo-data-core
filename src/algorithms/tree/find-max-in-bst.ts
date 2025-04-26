/**
 * Finds the maximum value in a Binary Search Tree
 *
 * @time O(h) where h is the height of the tree; average case O(log n) worst case O(n) for skewed trees.
 * @space O(h) due to recursive call stack; average case O(log n) worst case O(n) for skewed trees.
 *
 * @param {Node<number> | null} root - The root node of the Binary Search Tree.
 * @returns {number | null} - The maximum value in the BST or null if the tree is empty.
 *
 * @constraints
 * - 0 ≤ n ≤ 500 (number of nodes)
 * - -10^4 ≤ Node.data ≤ 10^4 (value range for node data)
 */

import { Node } from "../../data-structures/tree";

export function findMaximum(root: Node<number> | null): number | null {
    if (root === null) {
        return null;
    }

    if (root.rightChild === null) {
        return root.val;
    }

    return findMaximum(root.rightChild);
}
