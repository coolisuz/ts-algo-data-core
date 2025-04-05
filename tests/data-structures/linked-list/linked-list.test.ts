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
    })
})