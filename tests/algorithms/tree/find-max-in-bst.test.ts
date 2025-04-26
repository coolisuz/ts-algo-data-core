import { Node } from "../../../src/data-structures/tree";
import { findMaximum } from "../../../src/algorithms/tree/find-max-in-bst";

describe("findMaximum", () => {
    test("should return null for an empty tree", () => {
        expect(findMaximum(null)).toBeNull();
    });

    test("should return the value of a single node tree", () => {
        const root = new Node<number>(5);
        expect(findMaximum(root)).toBe(5);
    });

    test("should find the maximum in a balanced BST", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(3);
        root.rightChild = new Node<number>(7);
        root.rightChild.leftChild = new Node<number>(6);
        root.rightChild.rightChild = new Node<number>(8);
        expect(findMaximum(root)).toBe(8);
    });

    test("should find the maximum in a skewed right BST", () => {
        const root = new Node<number>(5);
        root.rightChild = new Node<number>(6);
        root.rightChild.rightChild = new Node<number>(7);
        root.rightChild.rightChild.rightChild = new Node<number>(8);
        expect(findMaximum(root)).toBe(8);
    });
});
