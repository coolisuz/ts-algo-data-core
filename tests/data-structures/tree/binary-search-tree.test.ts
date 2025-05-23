import { BST } from "../../../src/data-structures/tree/binary-search-tree";
import { Node } from "../../../src/data-structures/tree/index";

describe("BST", () => {
    describe("insert", () => {
        test("should insert value into an empty tree", () => {
            const bst = new BST<number>();
            bst.insert(10);

            expect(bst.root).not.toBeNull();
            expect(bst.root?.val).toBe(10);
            expect(bst.root?.leftChild).toBeNull();
            expect(bst.root?.rightChild).toBeNull();
        });

        test("should insert multiple values in correct positions", () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(15);

            expect(bst.root?.val).toBe(10);

            expect(bst.root?.leftChild?.val).toBe(5);

            expect(bst.root?.rightChild?.val).toBe(15);
        });

        test("should handle insertions creating an unbalanced tree", () => {
            const bst = new BST<number>();
            bst.insert(1).insert(2).insert(3).insert(4);

            expect(bst.root?.val).toBe(1);
            expect(bst.root?.rightChild?.val).toBe(2);
            expect(bst.root?.rightChild?.rightChild?.val).toBe(3);
            expect(bst.root?.rightChild?.rightChild?.rightChild?.val).toBe(4);
            expect(bst.root?.leftChild).toBeNull();
        });
    });

    describe("insertV2", () => {
        test("should correctly insert value into an empty tree", () => {
            const bst = new BST<number>();
            bst.root = bst.insertV2(bst.root, 10);

            expect(bst.root).not.toBeNull();
            expect(bst.root?.val).toBe(10);
            expect(bst.root?.leftChild).toBeNull();
            expect(bst.root?.rightChild).toBeNull();
        });

        test("should build correct tree with multiple values", () => {
            const bst = new BST<number>();
            bst.root = bst.insertV2(bst.root, 10);
            bst.root = bst.insertV2(bst.root, 5);
            bst.root = bst.insertV2(bst.root, 15);
            bst.root = bst.insertV2(bst.root, 3);
            bst.root = bst.insertV2(bst.root, 7);

            expect(bst.root?.val).toBe(10);
            expect(bst.root?.leftChild?.val).toBe(5);
            expect(bst.root?.rightChild?.val).toBe(15);
            expect(bst.root?.leftChild?.leftChild?.val).toBe(3);
            expect(bst.root?.leftChild?.rightChild?.val).toBe(7);
        });

        test("should preserve existing values when inserting duplicates", () => {
            const bst = new BST<number>();
            bst.root = bst.insertV2(bst.root, 10);
            bst.root = bst.insertV2(bst.root, 5);
            bst.root = bst.insertV2(bst.root, 10);

            expect(bst.root?.val).toBe(10);
            expect(bst.root?.leftChild?.val).toBe(5);
            expect(bst.root?.rightChild).toBeNull();

            let nodeCount = 0;
            function countNodes(node: Node<number>): void {
                if (!node) return;
                nodeCount++;
                countNodes(node.leftChild!);
                countNodes(node.rightChild!);
            }

            countNodes(bst.root);
            expect(nodeCount).toBe(2);
        });
    });

    describe("preOrderPrint", () => {
        test("should return values in pre-order traversal sequence", () => {
            const bst = new BST<number>();
            // tree:
            //      10
            //     /  \
            //    5    15
            //   / \
            //  3   7
            bst.insert(10).insert(5).insert(15).insert(3).insert(7);

            // Pre-order traversal should visit: root, left, right
            const result = bst.preOrderPrint(bst.root);

            expect(result).toEqual([10, 5, 3, 7, 15]);
        });

        test("should return empty array for null node", () => {
            const bst = new BST<number>();

            expect(bst.preOrderPrint(null)).toEqual([]);

            bst.insert(42);

            expect(bst.preOrderPrint(bst.root?.leftChild)).toEqual([]);
        });
    });

    describe("inOrderPrint", () => {
        test("should return values in ascending order for a BST", () => {
            const bst = new BST<number>();
            // the tree:
            //      10
            //     /  \
            //    5    15
            //   / \
            //  3   7
            bst.insert(10).insert(5).insert(15).insert(3).insert(7);

            // In-order traversal should visit: left, root, right
            const result = bst.inOrderPrint();

            expect(result).toEqual([3, 5, 7, 10, 15]);
        });

        test("should handle unbalanced trees correctly", () => {
            const bst = new BST<number>();
            // unbalanced tree:
            //      1
            //       \
            //        2
            //         \
            //          3
            //           \
            //            4
            bst.insert(1).insert(2).insert(3).insert(4);

            const result = bst.inOrderPrint();

            expect(result).toEqual([1, 2, 3, 4]);
            expect(bst.inOrderPrint(null)).toEqual([]);
        });
    });

    describe("postOrderPrint", () => {
        test("should return values in post-order traversal sequence", () => {
            const bst = new BST<number>();
            // the tree:
            //      10
            //     /  \
            //    5    15
            //   / \
            //  3   7
            bst.insert(10).insert(5).insert(15).insert(3).insert(7);

            // Post-order traversal should visit: left, right, root
            const result = bst.postOrderPrint();
            expect(result).toEqual([3, 7, 5, 15, 10]);
        });

        test("should handle skewed trees correctly", () => {
            const bst = new BST<number>();
            // left-skewed tree:
            //      4
            //     /
            //    3
            //   /
            //  2
            // /
            //1
            bst.insert(4).insert(3).insert(2).insert(1);

            const result = bst.postOrderPrint();

            expect(result).toEqual([1, 2, 3, 4]);

            const bst2 = new BST<number>();
            bst2.insert(1).insert(2).insert(3).insert(4);

            const result2 = bst2.postOrderPrint();

            expect(result2).toEqual([4, 3, 2, 1]);

            expect(bst.postOrderPrint(null)).toEqual([]);
        });
    });

    describe("search", () => {
        test("should find existing value and return the node", () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(15).insert(3).insert(7);

            const result = bst.search(7);
            expect(result).not.toBeNull();
            expect(result?.val).toBe(7);
        });

        test("should return null for non-existent value", () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(15);

            const result = bst.search(99);
            expect(result).toBeNull();
        });

        test("should work correctly with empty tree", () => {
            const bst = new BST<number>();

            const result = bst.search(1);
            expect(result).toBeNull();
        });
    });

    describe("searchV2", () => {
        test("should find existing value and return the node", () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(15).insert(3).insert(7);

            const result = bst.searchV2(bst.root, 7);

            expect(result).not.toBeNull();
            expect(result?.val).toBe(7);
            expect(result?.leftChild).toBeNull();
            expect(result?.rightChild).toBeNull();
        });

        test("should return null for value not in the tree", () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(15);

            const result = bst.searchV2(bst.root, 20);

            expect(result).toBeNull();
        });

        test("should find values at different tree levels", () => {
            const bst = new BST<number>();
            bst.insert(50)
                .insert(30)
                .insert(70)
                .insert(20)
                .insert(40)
                .insert(60)
                .insert(80);

            // Check root
            expect(bst.searchV2(bst.root, 50)?.val).toBe(50);

            // Check second level
            expect(bst.searchV2(bst.root, 30)?.val).toBe(30);
            expect(bst.searchV2(bst.root, 70)?.val).toBe(70);

            // Check third level
            expect(bst.searchV2(bst.root, 20)?.val).toBe(20);
            expect(bst.searchV2(bst.root, 80)?.val).toBe(80);

            // Test with null starting node
            expect(bst.searchV2(null, 50)).toBeNull();
        });
    });

    describe("delete", () => {
        let bst: BST<number>;

        beforeEach(() => {
            bst = new BST<number>();
        });

        test("should return false when deleting from an empty tree", () => {
            expect(bst.delete(10)).toBe(false);
        });

        test("should delete a leaf node correctly", () => {
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);

            expect(bst.delete(5)).toBe(true);
            expect(bst.contains(5)).toBe(false);
            expect(bst.contains(10)).toBe(true);
            expect(bst.contains(15)).toBe(true);
        });

        test("should delete a node with one child correctly", () => {
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(3);

            // Delete 5, which has one child (3)
            expect(bst.delete(5)).toBe(true);
            expect(bst.contains(5)).toBe(false);
            expect(bst.contains(3)).toBe(true);

            // 3 should now be directly connected to 10
            const root = bst.root;
            expect(root?.val).toBe(10);
            expect(root?.leftChild?.val).toBe(3);
        });

        test("should delete a node with two children correctly", () => {
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(3);
            bst.insert(7);

            // Delete 5, which has two children (3 and 7)
            expect(bst.delete(5)).toBe(true);
            expect(bst.contains(5)).toBe(false);
            expect(bst.contains(3)).toBe(true);
            expect(bst.contains(7)).toBe(true);

            // Either 3 or 7 should replace 5 (depends on implementation)
            const root = bst.root;
            expect(root?.val).toBe(10);
            expect(root?.leftChild?.val).toBe(7); // In this implementation the successor (7) replaces 5
            expect(root?.leftChild?.leftChild?.val).toBe(3);
        });

        test("should delete the root node correctly", () => {
            bst.insert(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(12);
            bst.insert(20);

            // Delete root (10)
            expect(bst.delete(10)).toBe(true);
            expect(bst.contains(10)).toBe(false);

            // Root should be replaced by its in-order successor (12)
            const newRoot = bst.root;
            expect(newRoot?.val).toBe(12);
            expect(newRoot?.leftChild?.val).toBe(5);
            expect(newRoot?.rightChild?.val).toBe(15);
            expect(newRoot?.rightChild?.rightChild?.val).toBe(20);
        });
    });

    describe("deleteV2", () => {
        test("should return false for empty tree", () => {
            const bst = new BST<number>();
            const result = bst.deleteV2(bst.root, 10);
            expect(result).toBe(false);
            expect(bst.root).toBeNull();
        });

        test("should delete leaf node successfully", () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(15);
            const result = bst.deleteV2(bst.root, 15);
            expect(result).toBe(true);
            expect(bst.root?.rightChild).toBeNull();
            expect(bst.inOrderPrint()).toEqual([5, 10]);
        });

        test("should delete root node with no children", () => {
            const bst = new BST<number>();
            bst.insert(10);
            const result = bst.deleteV2(bst.root, 10);
            expect(result).toBe(true);
            expect(bst.root).toBeNull();
        });

        test("should delete node with only left child", () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(3);
            const result = bst.deleteV2(bst.root, 5);
            expect(result).toBe(true);
            expect(bst.root?.leftChild?.val).toBe(3);
            expect(bst.inOrderPrint()).toEqual([3, 10]);
        });

        test("should delete node with only right child", () => {
            const bst = new BST<number>();
            bst.insert(10).insert(15).insert(20);
            const result = bst.deleteV2(bst.root, 15);
            expect(result).toBe(true);
            expect(bst.root?.rightChild?.val).toBe(20);
            expect(bst.inOrderPrint()).toEqual([10, 20]);
        });

        test("should delete node with two children", () => {
            const bst = new BST<number>();
            bst.insert(10)
                .insert(5)
                .insert(15)
                .insert(3)
                .insert(7)
                .insert(12)
                .insert(18);
            const result = bst.deleteV2(bst.root, 5);
            expect(result).toBe(true);
            expect(bst.root?.leftChild?.val).toBe(7);
            expect(bst.root?.leftChild?.leftChild?.val).toBe(3);
            expect(bst.inOrderPrint()).toEqual([3, 7, 10, 12, 15, 18]);
        });

        test("should delete root node with two children", () => {
            const bst = new BST<number>();
            bst.insert(10)
                .insert(5)
                .insert(15)
                .insert(3)
                .insert(7)
                .insert(12)
                .insert(18);
            const result = bst.deleteV2(bst.root, 10);
            expect(result).toBe(true);
            expect(bst.root?.val).toBe(12);
            expect(bst.inOrderPrint()).toEqual([3, 5, 7, 12, 15, 18]);
        });

        test("should return false for non-existent value", () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(15);
            const result = bst.deleteV2(bst.root, 99);
            expect(result).toBe(false);
            expect(bst.inOrderPrint()).toEqual([5, 10, 15]);
        });
    });
});
