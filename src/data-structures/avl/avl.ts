import { AVLNode } from "./node";

export class AVLTree<T> {
    root: AVLNode<T> | null;

    /**
     * Creates a new AVL tree
     * @param comparator - Optional custom comparison function
     */
    constructor() {
        this.root = null;
    }
    /**
     * Gets the height of a node (null nodes have height 0)
     */
    public getHeight(node: AVLNode<T> | null): number {
        return node ? node.height : 0;
    }
}
