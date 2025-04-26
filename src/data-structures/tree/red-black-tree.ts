import { IBinaryTreeNode, IRedBlackTree } from "../interfaces";

/**
 * Represents a node in a Red-Black Tree, implementing the IBinaryTreeNode interface.
 * @template T - The type of value stored in the node.
 */
export class RedBlackNode<T> implements IBinaryTreeNode<T> {
    public leftChild: RedBlackNode<T> | null;
    public rightChild: RedBlackNode<T> | null;
    public isRed: boolean;
    public parent: RedBlackNode<T> | null;

    constructor(public val: T) {
        this.val = val;
        this.rightChild = null;
        this.leftChild = null;
        this.isRed = true;
        this.parent = null;
    }
}

/**
 * A Red-Black Tree implementation, a self-balancing binary search tree.
 * Ensures O(log n) time complexity for operations by maintaining balance through color properties and rotations.
 * Space complexity is O(n) where n is the number of nodes.
 * @template T - The type of values stored in the tree.
 */
export class RedBlackTree<T> implements IRedBlackTree<T> {
    /** The root node of the tree, or null if the tree is empty. */
    root: RedBlackNode<T> | null;

    constructor() {
        this.root = null;
    }

    /**
     * Inserts a new value into the Red-Black Tree.
     * @param val - The value to insert into the tree.
     * @returns The Red-Black Tree instance for method chaining.
     * @time O(log n) - Average and worst-case time due to tree balancing.
     * @space O(1) - Uses constant extra space during insertion and balancing.
     */
    insert(val: T): RedBlackTree<T> {
        if (!this.root) {
            this.root = new RedBlackNode(val);
            this.root.isRed = false;
            return this;
        }

        let current = this.root;
        let newNode: RedBlackNode<T> | null = null;

        while (true) {
            if (val < current.val) {
                if (current.leftChild === null) {
                    newNode = new RedBlackNode(val);
                    newNode.parent = current;
                    current.leftChild = newNode;
                    break;
                } else {
                    current = current.leftChild;
                }
            } else {
                if (current.rightChild === null) {
                    newNode = new RedBlackNode(val);
                    newNode.parent = current;
                    current.rightChild = newNode;
                    break;
                } else {
                    current = current.rightChild;
                }
            }
        }

        if (newNode) {
            this.fixInsert(newNode);
        }

        return this;
    }

    /**
     * Fixes violations of Red-Black Tree properties after insertion.
     * @param node - The newly inserted node.
     * @private
     * @time O(log n) - Traverses up the tree height during balancing.
     * @space O(1) - Uses constant extra space.
     */
    private fixInsert(node: RedBlackNode<T>): void {
        let current = node;

        while (current.parent !== null && current.parent.isRed) {
            let parent = current.parent;
            let grandparent = parent.parent;

            if (!grandparent) break;

            let uncle =
                parent === grandparent.leftChild
                    ? grandparent.rightChild
                    : grandparent.leftChild;

            if (uncle !== null && uncle.isRed) {
                parent.isRed = false;
                uncle.isRed = false;
                grandparent.isRed = true;
                current = grandparent;
            } else {
                if (parent === grandparent.leftChild) {
                    if (current === parent.rightChild) {
                        this.leftRotate(parent);
                        current = parent;
                        parent = grandparent.leftChild!;
                    }
                    parent.isRed = false;
                    grandparent.isRed = true;
                    this.rightRotate(grandparent);
                } else {
                    if (current === parent.leftChild) {
                        this.rightRotate(parent);
                        current = parent;
                        parent = grandparent.rightChild!;
                    }
                    parent.isRed = false;
                    grandparent.isRed = true;
                    this.leftRotate(grandparent);
                }
            }
        }

        if (this.root) {
            this.root.isRed = false;
        }
    }

    /**
     * Performs a left rotation on the specified node.
     * @param x - The node to rotate.
     * @private
     * @time O(1) - Constant time operation.
     * @space O(1) - Uses constant extra space.
     */
    private leftRotate(x: RedBlackNode<T>): void {
        let y = x.rightChild!;
        x.rightChild = y.leftChild;
        if (y.leftChild) {
            y.leftChild.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.leftChild) {
            x.parent.leftChild = y;
        } else {
            x.parent.rightChild = y;
        }
        y.leftChild = x;
        x.parent = y;
    }

    /**
     * Performs a right rotation on the specified node.
     * @param y - The node to rotate.
     * @private
     * @time O(1) - Constant time operation.
     * @space O(1) - Uses constant extra space.
     */
    private rightRotate(y: RedBlackNode<T>): void {
        let x = y.leftChild!;
        y.leftChild = x.rightChild;
        if (x.rightChild) {
            x.rightChild.parent = y;
        }
        x.parent = y.parent;
        if (y.parent === null) {
            this.root = x;
        } else if (y === y.parent.rightChild) {
            y.parent.rightChild = x;
        } else {
            y.parent.leftChild = x;
        }
        x.rightChild = y;
        y.parent = x;
    }
}
