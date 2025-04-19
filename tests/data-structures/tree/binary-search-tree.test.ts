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
});