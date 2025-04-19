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
});