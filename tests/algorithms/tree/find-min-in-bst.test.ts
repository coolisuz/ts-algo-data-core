import { Node } from "../../../src/data-structures/tree";
import { findMinimum } from "../../../src/algorithms/tree/find-min-in-bst";

describe("findMinimum", () => {
    test("should return null for an empty tree", () => {
        expect(findMinimum(null)).toBeNull();
    });

    test("should return the value of a single node tree", () => {
        const root = new Node<number>(5);
        expect(findMinimum(root)).toBe(5);
    });

    test("should find the minimum in a balanced BST", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(3);
        root.rightChild = new Node<number>(7);
        root.leftChild.leftChild = new Node<number>(1);
        root.leftChild.rightChild = new Node<number>(4);
        expect(findMinimum(root)).toBe(1);
    });

    test("should find the minimum in a skewed left BST", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(3);
        root.leftChild.leftChild = new Node<number>(2);
        root.leftChild.leftChild.leftChild = new Node<number>(1);
        expect(findMinimum(root)).toBe(1);
    });
});
