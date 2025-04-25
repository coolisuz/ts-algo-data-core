import { RedBlackTree } from "../../../src/data-structures/tree/index";

describe("RedBlackTree", () => {
    let tree: RedBlackTree<number>;

    beforeEach(() => {
        tree = new RedBlackTree<number>();
    });

    test("should insert into an empty tree and set root to black", () => {
        tree.insert(10);
        expect(tree.root).not.toBeNull();
        expect(tree.root!.val).toBe(10);
        expect(tree.root!.isRed).toBe(false);
    });

    test("should insert multiple nodes and keep root black", () => {
        tree.insert(10);
        tree.insert(20);
        tree.insert(5);
        expect(tree.root).not.toBeNull();
        expect(tree.root!.val).toBe(10);
        expect(tree.root!.isRed).toBe(false);
    });

    test("should handle recoloring when uncle is red", () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(3);
        tree.insert(7);

        expect(tree.root!.isRed).toBe(false);
        expect(tree.root!.leftChild!.isRed).toBe(false);
        expect(tree.root!.rightChild!.isRed).toBe(false);
        expect(tree.root!.leftChild!.leftChild!.isRed).toBe(true);
        expect(tree.root!.leftChild!.rightChild!.isRed).toBe(true);
    });

    test("should handle left-left case with right rotation", () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(3);

        expect(tree.root!.val).toBe(5);
        expect(tree.root!.isRed).toBe(false);
        expect(tree.root!.leftChild!.val).toBe(3);
        expect(tree.root!.leftChild!.isRed).toBe(true);
        expect(tree.root!.rightChild!.val).toBe(10);
        expect(tree.root!.rightChild!.isRed).toBe(true);
    });

    test("should handle left-right case with double rotation", () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(7);

        expect(tree.root!.val).toBe(7);
        expect(tree.root!.isRed).toBe(false);
        expect(tree.root!.leftChild!.val).toBe(5);
        expect(tree.root!.leftChild!.isRed).toBe(true);
        expect(tree.root!.rightChild!.val).toBe(10);
        expect(tree.root!.rightChild!.isRed).toBe(true);
    });

    test("should maintain balance with sequential insertions", () => {
        const values = [10, 20, 30, 15, 25, 5, 1];
        values.forEach((val) => tree.insert(val));

        expect(tree.root!.isRed).toBe(false);
        expect(tree.root!.rightChild!.isRed).toBe(false);
    });
});
