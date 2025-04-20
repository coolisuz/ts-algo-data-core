import { StackLinkedList } from "../../../src/data-structures/stack";

describe("StackLinkedList", () => {
    let stack: StackLinkedList<number>;

    beforeEach(() => {
        stack = new StackLinkedList<number>();
    });

    describe("push", () => {
        test("should add an element to an empty stack", () => {
            stack.push(10);
            expect(stack.size()).toBe(1);
            expect(stack.peek()).toBe(10);
        });

        test("should add multiple elements and maintain correct order", () => {
            stack.push(10).push(20).push(30);
            expect(stack.size()).toBe(3);
            expect(stack.peek()).toBe(30);
        });
    });

    describe("pop", () => {
        test("should return undefined from an empty stack", () => {
            expect(stack.pop()).toBeUndefined();
        });

        test("should remove and return elements in LIFO order", () => {
            stack.push(10).push(20).push(30);
            expect(stack.pop()).toBe(30);
            expect(stack.pop()).toBe(20);
            expect(stack.pop()).toBe(10);
            expect(stack.isEmpty()).toBe(true);
        });
    });

    describe("peek", () => {
        test("should return undefined from an empty stack", () => {
            expect(stack.peek()).toBeUndefined();
        });

        test("should return the top element without removing it", () => {
            stack.push(10).push(20);
            expect(stack.peek()).toBe(20);
            expect(stack.size()).toBe(2);
        });
    });

    describe("isEmpty", () => {
        test("should return true for a new stack", () => {
            expect(stack.isEmpty()).toBe(true);
        });

        test("should return false after elements are added", () => {
            stack.push(10);
            expect(stack.isEmpty()).toBe(false);
            stack.pop();
            expect(stack.isEmpty()).toBe(true);
        });
    });

    describe("size", () => {
        test("should return 0 for a new stack", () => {
            expect(stack.size()).toBe(0);
        });

        test("should correctly track size through push and pop operations", () => {
            stack.push(10).push(20);
            expect(stack.size()).toBe(2);
            stack.pop();
            expect(stack.size()).toBe(1);
            stack.pop();
            expect(stack.size()).toBe(0);
        });
    });

    describe("clear", () => {
        test("should remove all elements from the stack", () => {
            stack.push(10).push(20).push(30);
            stack.clear();
            expect(stack.isEmpty()).toBe(true);
            expect(stack.size()).toBe(0);
        });

        test("should work on an already empty stack", () => {
            stack.clear();
            expect(stack.isEmpty()).toBe(true);
            expect(stack.size()).toBe(0);
        });
    });
});
