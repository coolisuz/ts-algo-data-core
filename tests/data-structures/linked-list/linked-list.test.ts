import { LinkedList } from '../../../src/data-structures/linked-list/index';

describe('LinkedList', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList();
    });

    describe('append', () => {
        test('should append to an empty list', () => {
            list.append(1);
            expect(list.getSize()).toEqual(1);
        });

        test('should append to a non empty list', () => {
            list.append(1).append(2).append(3);
            expect(list.getSize()).toEqual(3);
        });

        test('should return the list for chaining', () => {
            const result = list.append(5);
            expect(result).toEqual(list);
        })
    });

    describe('search', () => {
        test('should return false for an empty list', () => {
            expect(list.search(5)).toEqual(false);
        });

        test('should return false for a non empty list', () => {
            list.append(1).append(2).append(3);
            expect(list.search(4)).toEqual(false);
        });

        test('should return true when value found in the list', () => {
            list.append(1).append(2).append(3);
            expect(list.search(3)).toEqual(true);
        });
    });

    describe('deleteByValue', () => {
        test('should return false for empty list', () => {
            expect(list.deleteByValue(5)).toBe(false);
            expect(list.getSize()).toBe(0);
        });

        test('should delete head node', () => {
            list.append(1).append(2).append(3);
            expect(list.deleteByValue(1)).toBe(true);
            expect(list.getSize()).toBe(2);
            expect(list.search(1)).toBe(false);
        });

        test('should delete middle node', () => {
            list.append(1).append(2).append(3);
            expect(list.deleteByValue(2)).toBe(true);
            expect(list.getSize()).toBe(2);
            expect(list.search(2)).toBe(false);
        });

        test('should delete tail node', () => {
            list.append(1).append(2).append(3);
            expect(list.deleteByValue(3)).toBe(true);
            expect(list.getSize()).toBe(2);
            expect(list.search(3)).toBe(false);
        });

        test('should return false when value not found', () => {
            list.append(1).append(2);
            expect(list.deleteByValue(3)).toBe(false);
            expect(list.getSize()).toBe(2);
        });

        test('should handle single node list', () => {
            list.append(1);
            expect(list.deleteByValue(1)).toBe(true);
            expect(list.getSize()).toBe(0);
        });
    });

    describe('deleteAtHead', () => {
        test('should do nothing when list is empty', () => {
            list.deleteAtHead();
            expect(list.getSize()).toBe(0);
        });

        test('should delete the only node when list has one element', () => {
            list.append(1);
            list.deleteAtHead();
            expect(list.getSize()).toBe(0);
            expect(list.search(1)).toBe(false);
        });

        test('should delete head node when list has multiple elements', () => {
            list.append(1).append(2).append(3);
            list.deleteAtHead();
            expect(list.getSize()).toBe(2);
            expect(list.search(1)).toBe(false);
            expect(list.search(2)).toBe(true);
            expect(list.search(3)).toBe(true);
        });
    });

    describe('deleteAtTail', () => {
        test('should do nothing when list is empty', () => {
            list.deleteAtTail();
            expect(list.getSize()).toBe(0);
        });

        test('should delete the only node when list has one element', () => {
            list.append(1);
            list.deleteAtTail();
            expect(list.getSize()).toBe(0);
            expect(list.search(1)).toBe(false);
        });

        test('should delete tail node when list has multiple elements', () => {
            list.append(1).append(2).append(3);
            list.deleteAtTail();
            expect(list.getSize()).toBe(2);
            expect(list.search(1)).toBe(true);
            expect(list.search(2)).toBe(true);
            expect(list.search(3)).toBe(false);
        });
    });
})