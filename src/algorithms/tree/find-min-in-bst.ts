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
