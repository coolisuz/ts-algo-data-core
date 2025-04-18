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
    preOrderPrint(currentNode: IBinaryTreeNode<T> | null): T[];
    print(): IBinarySearchTree<T>;
}
