/**
 * Finds the ancestors of a node with the given value in a Binary Search Tree.
 * Ancestors are all nodes from the root to the parent of the target node (excluding the target node itself).
 *
 * @time O(h) where h is the height of the tree; average case O(log n) worst case O(n) for skewed trees.
 * @space O(h) for storing the path; average case O(log n) worst case O(n) for skewed trees.
 *
 * @param {Node<number> | null} root - The root node of the Binary Search Tree.
 * @param {number} k - The value of the node whose ancestors are to be found.
 * @returns {number[]} - An array of values representing the ancestors of the node with value k from root to parent.
 *                       Returns an empty array if the tree is empty or if k is not found.
 *
 * @constraints
 * - 0 ≤ n ≤ 500 (number of nodes)
 * - -10^4 ≤ Node.data ≤ 10^4 (value range for node data)
 */

import { Node } from "../../data-structures/tree";

export function findAncestors(root: Node<number> | null, k: number): number[] {
    const ancestors: number[] = [];

    if (root === null) {
        return ancestors;
    }

    if (root.val === k) {
        return [];
    }

    let current: Node<number> | null = root;

    while (current !== null && current.val !== k) {
        ancestors.push(current.val);
        if (k < current.val) {
            current = current.leftChild;
        } else {
            current = current.rightChild;
        }
    }

    if (current === null) {
        return [];
    }

    return ancestors;
}
