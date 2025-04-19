import { ILinkedList } from "../interfaces/index.ts";

export interface IGraph<T> {
    addEdge(source: number, destination: number): IGraph<T>;
    printGraph(): void;
    toString(): string;
    getVertices(): number;
    getList(): ILinkedList<number>[];
}
