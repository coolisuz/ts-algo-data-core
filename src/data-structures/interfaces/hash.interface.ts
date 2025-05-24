export interface IHashEntry<T> {
    key: number;
    data: T;
    next: IHashEntry<T> | null;
}
