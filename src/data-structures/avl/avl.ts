import { AVLNode } from "./node";

export class AVLTree<T> {
    private root: AVLNode<T> | null;

    /**
     * Creates a new AVL tree
     * @param comparator - Optional custom comparison function
     */
    constructor(comparator?: (a: T, b: T) => number) {
        this.root = null;
    }
    /**
     * Gets the height of a node (null nodes have height 0)
     */
    private getHeight(node: AVLNode<T> | null): number {
        return node ? node.height : 0;
    }
}