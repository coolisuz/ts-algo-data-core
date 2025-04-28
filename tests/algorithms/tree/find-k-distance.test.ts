import { Node } from "../../../src/data-structures/tree";
import { findKNodes } from "../../../src/algorithms/tree/find-k-distance";

describe("findKNodes", () => {
    test("should return empty array for an empty tree", () => {
        expect(findKNodes(null, 1)).toEqual([]);
    });

    test("should return empty array for negative k", () => {
        const root = new Node<number>(5);
        expect(findKNodes(root, -1)).toEqual([]);
    });

    test("should return root value for k=0", () => {
        const root = new Node<number>(5);
        expect(findKNodes(root, 0)).toEqual([5]);
    });

    test("should find nodes at distance k in a balanced BST", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(3);
        root.rightChild = new Node<number>(7);
        root.leftChild.leftChild = new Node<number>(1);
        root.leftChild.rightChild = new Node<number>(4);
        root.rightChild.leftChild = new Node<number>(6);
        root.rightChild.rightChild = new Node<number>(8);
        expect(findKNodes(root, 1)).toEqual(expect.arrayContaining([3, 7]));
        expect(findKNodes(root, 2)).toEqual(
            expect.arrayContaining([1, 4, 6, 8]),
        );
        expect(findKNodes(root, 3)).toEqual([]);
    });

    test("should find nodes at distance k in a skewed left BST", () => {
        const root = new Node<number>(5);
        root.leftChild = new Node<number>(4);
        root.leftChild.leftChild = new Node<number>(3);
        root.leftChild.leftChild.leftChild = new Node<number>(2);
        root.leftChild.leftChild.leftChild.leftChild = new Node<number>(1);
        expect(findKNodes(root, 1)).toEqual([4]);
        expect(findKNodes(root, 2)).toEqual([3]);
        expect(findKNodes(root, 3)).toEqual([2]);
        expect(findKNodes(root, 4)).toEqual([1]);
        expect(findKNodes(root, 5)).toEqual([]);
    });

    test("should find nodes at distance k in a skewed right BST", () => {
        const root = new Node<number>(5);
        root.rightChild = new Node<number>(6);
        root.rightChild.rightChild = new Node<number>(7);
        root.rightChild.rightChild.rightChild = new Node<number>(8);
        expect(findKNodes(root, 1)).toEqual([6]);
        expect(findKNodes(root, 2)).toEqual([7]);
        expect(findKNodes(root, 3)).toEqual([8]);
        expect(findKNodes(root, 4)).toEqual([]);
    });
});
