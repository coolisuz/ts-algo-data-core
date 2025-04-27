/**
 * Finds the kth maximum value in a Binary Search Tree using reverse in-order traversal.
 *
 * @timeComplexity O(h + k) where h is the height of the tree and k is the input parameter; average case O(log n + k), worst case O(n + k) for skewed trees.
 * @spaceComplexity O(h) for the stack used in iteration; average case O(log n) worst case O(n) for skewed trees.
 *
 * @param {Node<number> | null} root - The root node of the Binary Search Tree.
 * @param {number} k - The position of the maximum value to find (1 for the largest 2 for the second largest, etc.).
 * @returns {number | null} - The kth maximum value in the BST or null if the tree is empty or k is invalid.
 *
 * @constraints
 * - 0 ≤ n ≤ 500 (number of nodes)
 * - -10^4 ≤ Node.data ≤ 10^4 (value range for node data)
 * - 1 ≤ k ≤ n (k must be within the number of nodes in the tree)
 */

import { Node } from "../../data-structures/tree";

export function findKthMaximum(
    root: Node<number> | null,
    k: number,
): number | null {
    if (root === null || k <= 0) {
        return null;
    }

    const stack: Node<number>[] = [];
    let current: Node<number> | null = root;
    let count = 0;

    while (stack.length > 0 || current !== null) {
        // Traverse to the rightmost node
        while (current !== null) {
            stack.push(current);
            current = current.rightChild;
        }

        current = stack.pop()!;
        count++;

        if (count === k) {
            return current.val;
        }

        current = current.leftChild;
    }

    return null;
}
