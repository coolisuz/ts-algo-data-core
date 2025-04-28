/**
 * Finds all nodes in a Binary Tree that are at a distance of k from the root node.
 * Distance is measured as the number of edges between the root and the node.
 *
 * @time O(n) where n is the number of nodes in the tree as it may need to visit all nodes.
 * @space O(h) where h is the height of the tree due to recursive call stack; average case O(log n) worst case O(n) for skewed trees
 *
 * @param {Node<number> | null} root - The root node of the Binary Tree.
 * @param {number} k - The distance from the root at which to find nodes (k >= 0).
 * @returns {number[]} - An array of values of nodes that are at distance k from the root.
 *                       Returns an empty array if the tree is empty, k is negative or no nodes exist at distance k.
 *
 * @constraints
 * - 0 ≤ n ≤ 500 (number of nodes)
 * - -10^4 ≤ Node.data ≤ 10^4 (value range for node data)
 * - k >= 0 (distance must be non-negative)
 */

import { Node } from "../../data-structures/tree";

export function findKNodes(root: Node<number> | null, k: number): number[] {
    if (root === null || k < 0) {
        return [];
    }

    if (k === 0) {
        return [root.val];
    }

    const left = findKNodes(root.leftChild, k - 1);
    const right = findKNodes(root.rightChild, k - 1);

    return [...left, ...right];
}
