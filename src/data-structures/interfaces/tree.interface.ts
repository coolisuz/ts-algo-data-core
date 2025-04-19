export interface IBinaryTreeNode<T> {
    val: T;
    leftChild: IBinaryTreeNode<T> | null;
    rightChild: IBinaryTreeNode<T> | null;
}

export interface IBinarySearchTree<T> {
    root: IBinaryTreeNode<T> | null;
    insert(value: T): void;
}
