import { DoublyLinkedList } from "../../../src/data-structures/linked-list";

describe("DoublyLinkedList", () => {
    let list: DoublyLinkedList<number>;

    beforeEach(() => {
        list = new DoublyLinkedList<number>();
    });

    describe("append", () => {
        test("should append an element to an empty list", () => {
            list.append(10);
            expect(list.size()).toBe(1);
            expect(list.peekFront()).toBe(10);
            expect(list.peekEnd()).toBe(10);
        });

        test("should append multiple elements in correct order", () => {
            list.append(10).append(20).append(30);
            expect(list.size()).toBe(3);
            expect(list.peekFront()).toBe(10);
            expect(list.peekEnd()).toBe(30);
        });
    });

    describe("prepend", () => {
        test("should prepend an element to an empty list", () => {
            list.prepend(10);
            expect(list.size()).toBe(1);
            expect(list.peekFront()).toBe(10);
            expect(list.peekEnd()).toBe(10);
        });

        test("should prepend multiple elements in correct order", () => {
            list.prepend(30).prepend(20).prepend(10);
            expect(list.size()).toBe(3);
            expect(list.peekFront()).toBe(10);
            expect(list.peekEnd()).toBe(30);
        });
    });

    describe("removeFromFront", () => {
        test("should return undefined from an empty list", () => {
            expect(list.removeFromFront()).toBeUndefined();
        });

        test("should remove elements from the front in correct order", () => {
            list.append(10).append(20).append(30);
            expect(list.removeFromFront()).toBe(10);
            expect(list.size()).toBe(2);
            expect(list.peekFront()).toBe(20);
            expect(list.removeFromFront()).toBe(20);
            expect(list.removeFromFront()).toBe(30);
            expect(list.isEmpty()).toBe(true);
        });
    });

    describe("removeFromEnd", () => {
        test("should return undefined from an empty list", () => {
            expect(list.removeFromEnd()).toBeUndefined();
        });

        test("should remove elements from the end in correct order", () => {
            list.append(10).append(20).append(30);
            expect(list.removeFromEnd()).toBe(30);
            expect(list.size()).toBe(2);
            expect(list.peekEnd()).toBe(20);
            expect(list.removeFromEnd()).toBe(20);
            expect(list.removeFromEnd()).toBe(10);
            expect(list.isEmpty()).toBe(true);
        });
    });

    describe("peekFront", () => {
        test("should return undefined for an empty list", () => {
            expect(list.peekFront()).toBeUndefined();
        });

        test("should return the front element without removing it", () => {
            list.append(10).append(20);
            expect(list.peekFront()).toBe(10);
            expect(list.size()).toBe(2);
        });
    });

    describe("peekEnd", () => {
        test("should return undefined for an empty list", () => {
            expect(list.peekEnd()).toBeUndefined();
        });

        test("should return the end element without removing it", () => {
            list.append(10).append(20);
            expect(list.peekEnd()).toBe(20);
            expect(list.size()).toBe(2);
        });
    });

    describe("isEmpty", () => {
        test("should return true for a new list", () => {
            expect(list.isEmpty()).toBe(true);
        });

        test("should return false after elements are added", () => {
            list.append(10);
            expect(list.isEmpty()).toBe(false);
        });
    });

    describe("size", () => {
        test("should return 0 for a new list", () => {
            expect(list.size()).toBe(0);
        });

        test("should correctly track size through various operations", () => {
            list.append(10).append(20);
            expect(list.size()).toBe(2);
            list.removeFromFront();
            expect(list.size()).toBe(1);
            list.prepend(30);
            expect(list.size()).toBe(2);
            list.removeFromEnd();
            expect(list.size()).toBe(1);
        });
    });

    describe("clear", () => {
        test("should remove all elements from the list", () => {
            list.append(10).append(20).append(30);
            list.clear();
            expect(list.isEmpty()).toBe(true);
            expect(list.size()).toBe(0);
        });

        test("should work on an already empty list", () => {
            list.clear();
            expect(list.isEmpty()).toBe(true);
        });
    });

    describe("mixed operations", () => {
        test("should handle a mix of append and prepend correctly", () => {
            list.append(20).prepend(10).append(30);
            expect(list.peekFront()).toBe(10);
            expect(list.peekEnd()).toBe(30);
            expect(list.size()).toBe(3);
        });

        test("should handle a mix of removal operations correctly", () => {
            list.append(10).append(20).append(30);
            expect(list.removeFromFront()).toBe(10);
            expect(list.removeFromEnd()).toBe(30);
            expect(list.size()).toBe(1);
            expect(list.peekFront()).toBe(20);
            expect(list.peekEnd()).toBe(20);
        });
    });
});
