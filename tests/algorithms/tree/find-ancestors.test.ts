import { Node } from "../../../src/data-structures/tree";
import { findAncestors } from "../../../src/algorithms/tree/find-ancestors";

describe("findAncestors", () => {
    test("should return empty array for an empty tree", () => {
        expect(findAncestors(null, 5)).toEqual([]);
    });

    test("should return empty array if target is root", () => {
        const root = new Node<number>(5);
        expect(findAncestors(root, 5)).toEqual([]);
    });

    test("should return empty array if target is not in tree", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(3);
        root.rightChild = new Node<number>(7);
        expect(findAncestors(root, 10)).toEqual([]);
    });

    test("should find ancestors in a balanced BST", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(3);
        root.rightChild = new Node<number>(7);
        root.leftChild.leftChild = new Node<number>(1);
        root.leftChild.rightChild = new Node<number>(4);
        root.rightChild.leftChild = new Node<number>(6);
        root.rightChild.rightChild = new Node<number>(8);
        expect(findAncestors(root, 1)).toEqual([5, 3]);
        expect(findAncestors(root, 4)).toEqual([5, 3]);
        expect(findAncestors(root, 8)).toEqual([5, 7]);
        expect(findAncestors(root, 6)).toEqual([5, 7]);
    });

    test("should find ancestors in a skewed left BST", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(4);
        root.leftChild.leftChild = new Node<number>(3);
        root.leftChild.leftChild.leftChild = new Node<number>(2);
        root.leftChild.leftChild.leftChild.leftChild = new Node<number>(1);
        expect(findAncestors(root, 1)).toEqual([5, 4, 3, 2]);
    });

    test("should find ancestors in a skewed right BST", () => {
        const root = new Node<number>(5);
        root.rightChild = new Node<number>(6);
        root.rightChild.rightChild = new Node<number>(7);
        root.rightChild.rightChild.rightChild = new Node<number>(8);
        expect(findAncestors(root, 8)).toEqual([5, 6, 7]);
    });
});
