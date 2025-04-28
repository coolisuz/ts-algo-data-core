import { Node } from "../../../src/data-structures/tree";
import { findHeight } from "../../../src/algorithms/tree/find-height-of-tree";

describe("findHeight", () => {
    test("should return 0 for an empty tree", () => {
        expect(findHeight(null)).toBe(0);
    });

    test("should return 1 for a single node tree", () => {
        const root = new Node<number>(5);
        expect(findHeight(root)).toBe(1);
    });

    test("should calculate height of a balanced BST", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(3);
        root.rightChild = new Node<number>(7);
        root.leftChild.leftChild = new Node<number>(1);
        root.leftChild.rightChild = new Node<number>(4);
        root.rightChild.leftChild = new Node<number>(6);
        root.rightChild.rightChild = new Node<number>(8);
        expect(findHeight(root)).toBe(3);
    });

    test("should calculate height of a skewed left BST", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(4);
        root.leftChild.leftChild = new Node<number>(3);
        root.leftChild.leftChild.leftChild = new Node<number>(2);
        root.leftChild.leftChild.leftChild.leftChild = new Node<number>(1);
        expect(findHeight(root)).toBe(5);
    });

    test("should calculate height of a skewed right BST", () => {
        const root = new Node<number>(5);
        root.rightChild = new Node<number>(6);
        root.rightChild.rightChild = new Node<number>(7);
        root.rightChild.rightChild.rightChild = new Node<number>(8);
        expect(findHeight(root)).toBe(4);
    });
});
