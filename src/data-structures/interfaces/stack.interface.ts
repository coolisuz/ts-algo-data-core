export interface IStack<T> {
    push(element: T): IStack<T>;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
    clear(): IStack<T>;
}

export interface IMinStack<T extends number> {
    push(value: T): void;
    pop(): T | undefined;
    min(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}
