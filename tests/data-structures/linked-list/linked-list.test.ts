import { LinkedList } from "../../../src/data-structures/linked-list/index";

describe("LinkedList", () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList();
    });

    describe("append", () => {
        test("should append to an empty list", () => {
            list.append(1);
            expect(list.getSize()).toEqual(1);
        });

        test("should append to a non empty list", () => {
            list.append(1).append(2).append(3);
            expect(list.getSize()).toEqual(3);
        });

        test("should return the list for chaining", () => {
            const result = list.append(5);
            expect(result).toEqual(list);
        });
    });

    describe("search", () => {
        test("should return false for an empty list", () => {
            expect(list.search(5)).toEqual(false);
        });

        test("should return false for a non empty list", () => {
            list.append(1).append(2).append(3);
            expect(list.search(4)).toEqual(false);
        });

        test("should return true when value found in the list", () => {
            list.append(1).append(2).append(3);
            expect(list.search(3)).toEqual(true);
        });
    });

    describe("deleteByValue", () => {
        test("should return false for empty list", () => {
            expect(list.deleteByValue(5)).toBe(false);
            expect(list.getSize()).toBe(0);
        });

        test("should delete head node", () => {
            list.append(1).append(2).append(3);
            expect(list.deleteByValue(1)).toBe(true);
            expect(list.getSize()).toBe(2);
            expect(list.search(1)).toBe(false);
        });

        test("should delete middle node", () => {
            list.append(1).append(2).append(3);
            expect(list.deleteByValue(2)).toBe(true);
            expect(list.getSize()).toBe(2);
            expect(list.search(2)).toBe(false);
        });

        test("should delete tail node", () => {
            list.append(1).append(2).append(3);
            expect(list.deleteByValue(3)).toBe(true);
            expect(list.getSize()).toBe(2);
            expect(list.search(3)).toBe(false);
        });

        test("should return false when value not found", () => {
            list.append(1).append(2);
            expect(list.deleteByValue(3)).toBe(false);
            expect(list.getSize()).toBe(2);
        });

        test("should handle single node list", () => {
            list.append(1);
            expect(list.deleteByValue(1)).toBe(true);
            expect(list.getSize()).toBe(0);
        });
    });

    describe("deleteAtHead", () => {
        test("should do nothing when list is empty", () => {
            list.deleteAtHead();
            expect(list.getSize()).toBe(0);
        });

        test("should delete the only node when list has one element", () => {
            list.append(1);
            list.deleteAtHead();
            expect(list.getSize()).toBe(0);
            expect(list.search(1)).toBe(false);
        });

        test("should delete head node when list has multiple elements", () => {
            list.append(1).append(2).append(3);
            list.deleteAtHead();
            expect(list.getSize()).toBe(2);
            expect(list.search(1)).toBe(false);
            expect(list.search(2)).toBe(true);
            expect(list.search(3)).toBe(true);
        });
    });

    describe("deleteAtTail", () => {
        test("should do nothing when list is empty", () => {
            list.deleteAtTail();
            expect(list.getSize()).toBe(0);
        });

        test("should delete the only node when list has one element", () => {
            list.append(1);
            list.deleteAtTail();
            expect(list.getSize()).toBe(0);
            expect(list.search(1)).toBe(false);
        });

        test("should delete tail node when list has multiple elements", () => {
            list.append(1).append(2).append(3);
            list.deleteAtTail();
            expect(list.getSize()).toBe(2);
            expect(list.search(1)).toBe(true);
            expect(list.search(2)).toBe(true);
            expect(list.search(3)).toBe(false);
        });
    });

    describe("length", () => {
        test("should return 0 for an empty list", () => {
            expect(list.length()).toBe(0);
        });

        test("should return correct count for non-empty list", () => {
            list.append(1).append(2).append(3);
            expect(list.length()).toBe(3);
        });
    });

    describe("removeDuplicate", () => {
        test("should do nothing on empty list", () => {
            const list = new LinkedList<number>();
            list.removeDuplicate();
            expect(list.getSize()).toBe(0);
        });

        test("should remove consecutive duplicates", () => {
            const list = new LinkedList<number>();
            list.append(1).append(2).append(2).append(3);
            list.removeDuplicate();
            expect(list.getSize()).toBe(3);
            expect(list.search(2)).toBe(true);
        });

        test("should remove non-consecutive duplicates", () => {
            const list = new LinkedList<string>();
            list.append("a").append("b").append("a").append("c");
            list.removeDuplicate();
            expect(list.getSize()).toBe(3);
            expect(list.search("a")).toBe(true);
        });

        test("should handle all duplicates", () => {
            const list = new LinkedList<number>();
            list.append(5).append(5).append(5);
            list.removeDuplicate();
            expect(list.getSize()).toBe(1);
            expect(list.search(5)).toBe(true);
        });
    });

    describe("union", () => {
        test("should return union of two lists", () => {
            const list1 = new LinkedList<number>();
            const list2 = new LinkedList<number>();
            const list = new LinkedList<number>();

            list1.append(1).append(2).append(3);
            list2.append(3).append(4).append(5);

            const unionList = list.union(list1.getHead()!, list2.getHead()!);

            expect(unionList.getSize()).toBe(5);
            expect(unionList.search(1)).toBe(true);
            expect(unionList.search(2)).toBe(true);
            expect(unionList.search(3)).toBe(true);
            expect(unionList.search(4)).toBe(true);
            expect(unionList.search(5)).toBe(true);
        });

        test("should handle empty lists", () => {
            const list1 = new LinkedList<number>();
            const list2 = new LinkedList<number>();
            const list = new LinkedList<number>();

            const unionList = list.union(list1.getHead()!, list2.getHead()!);

            expect(unionList.getSize()).toBe(0);
        });

        test("should handle one empty list", () => {
            const list1 = new LinkedList<number>();
            const list2 = new LinkedList<number>();
            const list = new LinkedList<number>();

            list1.append(1).append(2);

            const unionList = list.union(list1.getHead()!, list2.getHead()!);

            expect(unionList.getSize()).toBe(2);
            expect(unionList.search(1)).toBe(true);
            expect(unionList.search(2)).toBe(true);
        });
    });

    describe("intersection", () => {
        test("should return intersection of two lists with common elements", () => {
            const list1 = new LinkedList<number>();
            const list2 = new LinkedList<number>();
            const list = new LinkedList<number>();

            list1.append(1).append(2).append(3).append(4);
            list2.append(3).append(4).append(5).append(6);

            const intersectionList = list.intersection(
                list1.getHead()!,
                list2.getHead()!,
            );

            expect(intersectionList.getSize()).toBe(2);
            expect(intersectionList.search(3)).toBe(true);
            expect(intersectionList.search(4)).toBe(true);
            expect(intersectionList.search(1)).toBe(false);
        });

        test("should return empty list when no common elements", () => {
            const list1 = new LinkedList<number>();
            const list2 = new LinkedList<number>();
            const list = new LinkedList<number>();

            list1.append(1).append(2);
            list2.append(3).append(4);

            const intersectionList = list.intersection(
                list1.getHead()!,
                list2.getHead()!,
            );

            expect(intersectionList.getSize()).toBe(0);
        });

        test("should handle empty lists", () => {
            const list1 = new LinkedList<number>();
            const list2 = new LinkedList<number>();
            const list = new LinkedList<number>();

            const intersectionList = list.intersection(
                list1.getHead()!,
                list2.getHead()!,
            );

            expect(intersectionList.getSize()).toBe(0);
        });
    });

    describe("findNthFromBack", () => {
        let list: LinkedList<number>;

        beforeEach(() => {
            list = new LinkedList<number>();
        });

        test("should return null for empty list", () => {
            expect(list.findNthFromBack(1)).toBeNull();
        });

        test("should return null when n is greater than list length", () => {
            list.append(1).append(2).append(3);
            expect(list.findNthFromBack(4)).toBeNull();
        });

        test("should return the head when n equals list length", () => {
            list.append(10).append(20).append(30);
            expect(list.findNthFromBack(3)).toBe(10);
        });

        test("should return correct nth node from the end", () => {
            list.append(5).append(10).append(15).append(20).append(25);
            expect(list.findNthFromBack(2)).toBe(20); // Second from end
            expect(list.findNthFromBack(1)).toBe(25); // Last element
            expect(list.findNthFromBack(5)).toBe(5); // First element
        });
    });
});
