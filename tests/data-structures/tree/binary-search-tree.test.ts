import { BST } from '../../../src/data-structures/tree/binary-search-tree';

describe('BST', () => {
    describe('insert', () => {
        test('should insert value into an empty tree', () => {
            const bst = new BST<number>();
            bst.insert(10);
            
            expect(bst.root).not.toBeNull();
            expect(bst.root?.val).toBe(10);
            expect(bst.root?.leftChild).toBeNull();
            expect(bst.root?.rightChild).toBeNull();
        });

        test('should insert multiple values in correct positions', () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(15);
            
            expect(bst.root?.val).toBe(10);
            
            expect(bst.root?.leftChild?.val).toBe(5);
            
            expect(bst.root?.rightChild?.val).toBe(15);
        });

        test('should handle insertions creating an unbalanced tree', () => {
            const bst = new BST<number>();
            bst.insert(1).insert(2).insert(3).insert(4);
            
            expect(bst.root?.val).toBe(1);
            expect(bst.root?.rightChild?.val).toBe(2);
            expect(bst.root?.rightChild?.rightChild?.val).toBe(3);
            expect(bst.root?.rightChild?.rightChild?.rightChild?.val).toBe(4);
            expect(bst.root?.leftChild).toBeNull();
        });
    });

    describe('insertV2', () => {
        test('should correctly insert value into an empty tree', () => {
            const bst = new BST<number>();
            bst.root = bst.insertV2(bst.root, 10);
            
            expect(bst.root).not.toBeNull();
            expect(bst.root?.val).toBe(10);
            expect(bst.root?.leftChild).toBeNull();
            expect(bst.root?.rightChild).toBeNull();
        });

        test('should build correct tree with multiple values', () => {
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

        test('should preserve existing values when inserting duplicates', () => {
            const bst = new BST<number>();
            bst.root = bst.insertV2(bst.root, 10);
            bst.root = bst.insertV2(bst.root, 5);
            bst.root = bst.insertV2(bst.root, 10);
            
            expect(bst.root?.val).toBe(10);
            expect(bst.root?.leftChild?.val).toBe(5);
            expect(bst.root?.rightChild).toBeNull();
            
    
            let nodeCount = 0;
            function countNodes(node: any): void {
                if (!node) return;
                nodeCount++;
                countNodes(node.leftChild);
                countNodes(node.rightChild);
            }
            
            countNodes(bst.root);
            expect(nodeCount).toBe(2);
        });
    });

    describe('preOrderPrint', () => {
        test('should return values in pre-order traversal sequence', () => {
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
        
        test('should return empty array for null node', () => {
            const bst = new BST<number>();
            
            expect(bst.preOrderPrint(null)).toEqual([]);
            
            bst.insert(42);
            
            expect(bst.preOrderPrint(bst.root?.leftChild)).toEqual([]);
        });
    });

    describe('inOrderPrint', () => {
        test('should return values in ascending order for a BST', () => {
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
        
        test('should handle unbalanced trees correctly', () => {
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


    describe('postOrderPrint', () => {
        test('should return values in post-order traversal sequence', () => {
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
        
        test('should handle skewed trees correctly', () => {
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

    describe('search', () => {
        test('should find existing value and return the node', () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(15).insert(3).insert(7);
            
            const result = bst.search(7);
            
            expect(result).not.toBeNull();
            expect(result?.val).toBe(7);
            expect(result?.leftChild).toBeNull();
            expect(result?.rightChild).toBeNull();
        });
        
        test('should return null for value not in the tree', () => {
            const bst = new BST<number>();
            bst.insert(10).insert(5).insert(15);
            
            const result = bst.search(20);
            
            expect(result).toBeNull();
        });
        
        test('should work with different data types', () => {
            const bst = new BST<string>();
            bst.insert('banana').insert('apple').insert('cherry');
            
            const foundResult = bst.search('apple');
            expect(foundResult?.val).toBe('apple');
            
            const notFoundResult = bst.search('dragonfruit');
            expect(notFoundResult).toBeNull();
            
            const emptyBST = new BST<number>();
            expect(emptyBST.search(5)).toBeNull();
        });
    });
});