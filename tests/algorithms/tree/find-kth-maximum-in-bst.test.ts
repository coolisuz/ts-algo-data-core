import { Node } from "../../../src/data-structures/tree";
import { findKthMaximum } from "../../../src/algorithms/tree/find-kth-maximum-in-bst";

describe("findKthMaximum", () => {
    test("should return null for an empty tree", () => {
        expect(findKthMaximum(null, 1)).toBeNull();
    });

    test("should return null for invalid k (k <= 0)", () => {
        const root = new Node<number>(5);
        expect(findKthMaximum(root, 0)).toBeNull();
        expect(findKthMaximum(root, -1)).toBeNull();
    });

    test("should return the value of a single node tree for k=1", () => {
        const root = new Node<number>(5);
        expect(findKthMaximum(root, 1)).toBe(5);
    });

    test("should return null if k is larger than tree size", () => {
        const root = new Node<number>(5);
        expect(findKthMaximum(root, 2)).toBeNull();
    });

    test("should find the kth maximum in a balanced BST", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(3);
        root.rightChild = new Node<number>(7);
        root.leftChild.leftChild = new Node<number>(1);
        root.leftChild.rightChild = new Node<number>(4);
        root.rightChild.leftChild = new Node<number>(6);
        root.rightChild.rightChild = new Node<number>(8);
        expect(findKthMaximum(root, 1)).toBe(8); // largest
        expect(findKthMaximum(root, 2)).toBe(7); // second largest
        expect(findKthMaximum(root, 3)).toBe(6); // third largest
        expect(findKthMaximum(root, 4)).toBe(5); // fourth largest
    });

    test("should find the kth maximum in a skewed right BST", () => {
        const root = new Node<number>(5);
        root.rightChild = new Node<number>(6);
        root.rightChild.rightChild = new Node<number>(7);
        root.rightChild.rightChild.rightChild = new Node<number>(8);
        expect(findKthMaximum(root, 1)).toBe(8); // largest
        expect(findKthMaximum(root, 2)).toBe(7); // second largest
        expect(findKthMaximum(root, 3)).toBe(6); // third largest
        expect(findKthMaximum(root, 4)).toBe(5); // fourth largest
    });
});
