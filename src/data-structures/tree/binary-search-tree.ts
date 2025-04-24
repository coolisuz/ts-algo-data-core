/**
 * A Binary Search Tree implementation that maintains the BST property:
 * - Values in left subtree are less than node's value
 * - Values in right subtree are greater than node's value
 *
 * @typeparam T - The type of elements stored in the binary search tree
 */

import { Node } from "./node";
import { IBinarySearchTree } from "../interfaces/index";

export class BST<T> implements IBinarySearchTree<T> {
    /** Root node of the tree */
    root: Node<T> | null;

    /**
     * Creates a new Binary Search Tree
     *
     * @param {T} rootValue - Optional initial value for the root node
     */
    constructor(rootValue?: T) {
        this.root = rootValue !== undefined ? new Node(rootValue) : null;
    }

    /**
     * Inserts a new value to the tree
     *
     * @time O(log n) average case (balanced tree), O(n) worst case (unbalanced tree)
     * @space O(1) - No extra space used
     *
     * @param {value} value for the node
     * @returns {BST<T>} The tree instance for method chaining
     */
    insert(value: T): BST<T> {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        }

        let current = this.root;

        while (true) {
            // Go left
            if (value < current.val) {
                if (current.leftChild === null) {
                    current.leftChild = new Node(value);
                    break;
                } else {
                    current = current.leftChild;
                }
            }
            // Go right
            else {
                if (current.rightChild === null) {
                    current.rightChild = new Node(value);
                    break;
                } else {
                    current = current.rightChild;
                }
            }
        }

        return this;
    }

    /**
     * Recursively inserts a new value into the tree
     *
     * @time O(log n) average case (balanced tree) O(n) worst case (unbalanced tree)
     * @space O(log n) average case (balanced tree) O(n) worst case (unbalanced tree) - due to recursion stack
     *
     * @param {Node<T> | null} currentNode - The current node being examined in the recursive process
     * @param {T} value - The value to insert into the tree
     * @returns {Node<T>} The modified subtree with the value inserted
     */
    insertV2(currentNode: Node<T> | null, value: T): Node<T> {
        if (currentNode === null) {
            return new Node(value);
        }

        if (value > currentNode.val) {
            currentNode.rightChild = this.insertV2(
                currentNode.rightChild,
                value,
            );
        } else if (value < currentNode.val) {
            currentNode.leftChild = this.insertV2(currentNode.leftChild, value);
        }

        return currentNode;
    }

    /**
     * Performs a pre-order traversal of the tree and returns the values in pre-order.
     *
     * @time O(n) - where n is the number of nodes in the tree
     * @space O(n) - due to the call stack and result array
     *
     * @param {Node<T> | null} currentNode - Starting node for the traversal
     * @returns {T[]} Array of values in pre-order sequence
     */
    preOrderPrint(currentNode: Node<T> | null = this.root): T[] {
        if (currentNode === null) {
            return [];
        }

        const result: T[] = [currentNode.val];
        const leftValues = this.preOrderPrint(currentNode.leftChild);
        const rightValues = this.preOrderPrint(currentNode.rightChild);

        return [...result, ...leftValues, ...rightValues];
    }

    /**
     * Performs a in-order traversal of the tree and returns the values in in-order.
     *
     * @time O(n) - where n is the number of nodes in the tree
     * @space O(n) - due to the call stack and result array
     *
     * @param {Node<T> | null} currentNode - Starting node for the traversal
     * @returns {T[]} Array of values in in-order sequence
     */
    inOrderPrint(currentNode: Node<T> | null = this.root): T[] {
        if (currentNode === null) return [];

        const result: T[] = [currentNode.val];
        const leftValues = this.inOrderPrint(currentNode.leftChild);
        const rightValues = this.inOrderPrint(currentNode.rightChild);

        return [...leftValues, ...result, ...rightValues];
    }

    /**
     * Performs a post-order traversal of the tree and returns the values in post-order.
     *
     * @time O(n) - where n is the number of nodes in the tree
     * @space O(n) - due to the call stack and result array
     *
     * @param {Node<T> | null} currentNode - Starting node for the traversal
     * @returns {T[]} Array of values in post-order sequence
     */
    postOrderPrint(current: Node<T> | null = this.root): T[] {
        if (current === null) return [];

        const result = [current.val];
        const leftChild = this.postOrderPrint(current.leftChild);
        const rightChild = this.postOrderPrint(current.rightChild);

        return [...leftChild, ...rightChild, ...result];
    }

    /**
     * Prints a visual representation of the tree to the console (top to bottom)
     *
     * @time O(n) - Visits each node once
     * @space O(h) - Space complexity depends on the height of the tree
     * @returns {BST<T>} The tree instance for method chaining
     */

    print(): BST<T> {
        if (this.root === null) {
            console.log("Empty tree");
            return this;
        }

        const getHeight = (node: Node<T> | null): number => {
            if (node === null) return 0;
            return (
                1 +
                Math.max(getHeight(node.leftChild), getHeight(node.rightChild))
            );
        };

        const height = getHeight(this.root);
        const width = Math.pow(2, height) * 2 - 1;
        const matrix: string[][] = Array(height)
            .fill(0)
            .map(() => Array(width).fill(" "));

        const fillMatrix = (
            node: Node<T> | null,
            level: number,
            start: number,
            end: number,
        ): void => {
            if (node === null) return;

            const mid = Math.floor((start + end) / 2);
            matrix[level][mid] = String(node.val);

            fillMatrix(node.leftChild, level + 1, start, mid - 1);
            fillMatrix(node.rightChild, level + 1, mid + 1, end);
        };

        fillMatrix(this.root, 0, 0, width - 1);

        for (const row of matrix) {
            console.log(row.join(""));
        }

        return this;
    }

    /**
     * Searches for a node with the specified value in the binary search tree.
     *
     * @time O(log n) average case (balanced tree) and O(n) worst case (unbalanced tree)
     * @space O(1) - No extra space used regardless of input size
     *
     * @param {T} value - The value to search for
     * @returns {Node<T> | null} The node containing the value or null if not found
     */
    search(value: T): Node<T> | null {
        let currentNode = this.root;

        while (currentNode !== null) {
            if (currentNode.val === value) return currentNode;

            if (value < currentNode.val) {
                currentNode = currentNode.leftChild;
            } else {
                currentNode = currentNode.rightChild;
            }
        }

        return null;
    }

    /**
     * Recursively searches for a node with the specified value in the binary search tree
     *
     * @time O(log n) average case (balanced tree) and O(n) worst case (unbalanced tree)
     * @space O(log n) average case and O(n) worst case due to the recursion call stack
     *
     * @param {Node<T> | null} currentNode - The current node to examine
     * @param {T} value - The value to search for
     * @returns {Node<T> | null} The node containing the value or null if not found
     */
    searchV2(currentNode: Node<T> | null, value: T): Node<T> | null {
        if (currentNode === null) {
            return null;
        }

        if (value === currentNode.val) {
            return currentNode;
        } else if (value < currentNode.val) {
            return this.searchV2(currentNode.leftChild, value);
        } else {
            return this.searchV2(currentNode.rightChild, value);
        }
    }

    /**
     * Deletes a node with the given value from the Binary Search Tree
     *
     * @param {T} value - The value to be deleted from the tree
     * @returns {boolean} True if the value was found and deleted false otherwise
     *
     * @example
     * const bst = new BST<number>();
     * bst.insert(10);
     * bst.insert(5);
     * bst.insert(15);
     * bst.delete(5); // returns true
     * bst.delete(20); // returns false (not in tree)
     *
     * @time O(h) - where h is the height of the tree (O(log n) for balanced trees, O(n) for unbalanced)
     * @space O(1) - constant extra space used
     */
    delete(value: T): boolean {
        if (!this.root) {
            return false; // Tree is empty
        }

        // Special case for root
        if (this.root.val === value) {
            if (this.root.leftChild === null && this.root.rightChild === null) {
                // Root is a leaf node
                this.root = null;
                return true;
            } else if (this.root.leftChild === null) {
                // Root has only right child
                this.root = this.root.rightChild;
                return true;
            } else if (this.root.rightChild === null) {
                // Root has only left child
                this.root = this.root.leftChild;
                return true;
            } else {
                // Root has two children
                // Find the inorder successor (smallest value in right subtree)
                let minRight = this.root.rightChild;
                while (minRight.leftChild !== null) {
                    minRight = minRight.leftChild;
                }

                // Store the value of the successor
                const successorValue = minRight.val;

                // Remove the successor
                this.deleteNode(this.root, minRight.val);

                // Replace root's value with successor's value
                this.root.val = successorValue;
                return true;
            }
        }

        // For non-root nodes
        return this.deleteNode(this.root, value);
    }

    private deleteNode(currentNode: Node<T>, value: T): boolean {
        if (currentNode === null) {
            return false;
        }

        let parentNode: Node<T> = currentNode;
        let targetNode: Node<T> | null = currentNode;

        // Find the node to delete and its parent
        while (targetNode !== null && targetNode.val !== value) {
            parentNode = targetNode;

            if (value < targetNode.val) {
                targetNode = targetNode.leftChild;
            } else {
                targetNode = targetNode.rightChild;
            }
        }

        // Node not found
        if (targetNode === null) {
            return false;
        }

        // Case 1: Leaf node (no children)
        if (targetNode.leftChild === null && targetNode.rightChild === null) {
            if (targetNode.val < parentNode.val) {
                parentNode.leftChild = null;
            } else {
                parentNode.rightChild = null;
            }
            return true;
        }

        // Case 2: Node with only left child
        else if (targetNode.rightChild === null) {
            if (targetNode.val < parentNode.val) {
                parentNode.leftChild = targetNode.leftChild;
            } else {
                parentNode.rightChild = targetNode.leftChild;
            }
            return true;
        }

        // Case 3: Node with only right child
        else if (targetNode.leftChild === null) {
            if (targetNode.val < parentNode.val) {
                parentNode.leftChild = targetNode.rightChild;
            } else {
                parentNode.rightChild = targetNode.rightChild;
            }
            return true;
        }

        // Case 4: Node with two children
        else {
            // Find inorder successor (minimum value in right subtree)
            let successorParent = targetNode;
            let successor = targetNode.rightChild;

            while (successor.leftChild !== null) {
                successorParent = successor;
                successor = successor.leftChild;
            }

            // Replace target node's value with successor's value
            targetNode.val = successor.val;

            // Remove the successor
            if (successor === successorParent.leftChild) {
                successorParent.leftChild = successor.rightChild;
            } else {
                successorParent.rightChild = successor.rightChild;
            }

            return true;
        }
    }

    contains(value: T): boolean {
        return this.search(value) !== null;
    }

    /**
     * Deletes a node with the given value from the Binary Search Tree using an alternative implementation.
     *
     * @time O(h) - where h is the height of the tree (O(log n) for balanced trees, O(n) for unbalanced)
     * @space O(h) - due to recursion stack (O(log n) for balanced trees, O(n) for unbalanced)
     *
     * @param {Node<T> | null} currentNode - The starting node for the deletion process (typically the root)
     * @param {T} value - The value to be deleted from the tree
     * @returns {boolean} True if the value was found and deleted, false otherwise
     */
    deleteV2(currentNode: Node<T> | null, value: T): boolean {
        if (currentNode === null) {
            return false;
        }

        let parentNode: Node<T> | null = null;

        while (currentNode !== null && currentNode.val !== value) {
            parentNode = currentNode;

            if (value < currentNode.val) {
                currentNode = currentNode.leftChild;
            } else {
                currentNode = currentNode.rightChild;
            }
        }

        if (currentNode === null) {
            return false;
        } else if (
            currentNode.leftChild === null &&
            currentNode.rightChild === null
        ) {
            if (currentNode.val === this.root?.val) {
                this.root = null;
                return true;
            } else if (parentNode?.val) {
                if (currentNode.val < parentNode.val) {
                    parentNode.leftChild = null;
                    return true;
                } else {
                    parentNode.rightChild = null;
                    return true;
                }
            }
        } else if (
            currentNode.leftChild !== null &&
            currentNode.rightChild === null
        ) {
            if (currentNode.val === this.root?.val) {
                this.root = currentNode.leftChild;
                return true;
            } else if (parentNode && parentNode.val) {
                if (currentNode.leftChild.val < parentNode.val) {
                    parentNode.leftChild = currentNode.leftChild;
                    return true;
                } else {
                    parentNode.rightChild = currentNode.leftChild;
                }
            }
        } else if (
            currentNode.leftChild === null &&
            currentNode.rightChild !== null
        ) {
            if (currentNode.val === this.root?.val) {
                this.root = currentNode.rightChild;
                return true;
            } else if (parentNode && parentNode.val) {
                if (currentNode.rightChild.val < parentNode.val) {
                    parentNode.leftChild = currentNode.rightChild;
                    return true;
                } else {
                    parentNode.rightChild = currentNode.rightChild;
                    return true;
                }
            }
        } else {
            let minRight = currentNode.rightChild;

            while (minRight?.leftChild !== null) {
                minRight = minRight?.leftChild as Node<T>;
            }

            let temp = minRight.val;

            this.deleteV2(this.root, minRight.val);

            currentNode.val = temp;

            return true;
        }

        return false;
    }
}
