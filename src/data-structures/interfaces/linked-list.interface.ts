export interface INode<T> {
    data: T;
    next: INode<T> | null;
}

export interface IDoublyNode<T> extends INode<T> {
    prev: IDoublyNode<T> | null;
}

export interface ILinkedList<T> {
    append(data: T): ILinkedList<T>;
    prepend(data: T): ILinkedList<T>;
    getSize(): number;
    search(value: T): boolean;
    deleteByValue(value: T): boolean;
    deleteAtHead(): ILinkedList<T>;
    deleteAtTail(): ILinkedList<T>;
    length(): number;
    removeDuplicate(): ILinkedList<T>;
    getHead(): INode<T> | null;
    union(head1: INode<T>, head2: INode<T>): ILinkedList<T>;
    intersection(head1: INode<T>, head2: INode<T>): ILinkedList<T>;
    findNthFromBack(n: number): T | null;
}

export interface IDoublyLinkedList<T> {
    append(data: T): IDoublyLinkedList<T>;
    prepend(data: T): IDoublyLinkedList<T>;
    removeFromFront(): T | undefined;
    removeFromEnd(): T | undefined;
    peekFront(): T | undefined;
    peekEnd(): T | undefined;
    isEmpty(): boolean;
    size(): number;
    clear(): IDoublyLinkedList<T>;
}
