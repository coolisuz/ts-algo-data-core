export interface IBinaryTreeNode<T> {
    val: T;
    leftChild: IBinaryTreeNode<T> | null;
    rightChild: IBinaryTreeNode<T> | null;
}

export interface IBinarySearchTree<T> {
    root: IBinaryTreeNode<T> | null;
    insert(value: T): IBinarySearchTree<T>;
    insertV2(
        currentNode: IBinaryTreeNode<T> | null,
        newValue: T,
    ): IBinaryTreeNode<T>;
    preOrderPrint(currentNode?: IBinaryTreeNode<T> | null): T[];
    inOrderPrint(currentNode?: IBinaryTreeNode<T> | null): T[];
    postOrderPrint(currentNode?: IBinaryTreeNode<T> | null): T[];
    print(): IBinarySearchTree<T>;
    search(value: T): IBinaryTreeNode<T> | null;
    searchV2(
        currentNode: IBinaryTreeNode<T> | null,
        value: T,
    ): IBinaryTreeNode<T> | null;
    contains(value: T): boolean;
    delete(value: T): boolean;
    deleteV2(currentNode: IBinaryTreeNode<T> | null, value: T): boolean;
}

/**
 * Interface for an AVL Tree a self-balancing binary search tree.
 * Extends the basic Binary Search Tree interface with AVL-specific operations.
 */
export interface IAVLTree<T> {
    // AVL-specific methods can be added here if needed
    getHeight(node: IBinaryTreeNode<T> | null): number;
}
