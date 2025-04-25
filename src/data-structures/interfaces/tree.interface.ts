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

export interface IAVLTree<T> {
    getHeight(node: IBinaryTreeNode<T> | null): number;
}
