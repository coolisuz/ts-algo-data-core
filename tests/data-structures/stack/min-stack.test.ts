import { MinStack } from "../../../src/data-structures/stack";

describe("MinStack", () => {
    let stack: MinStack<number>;

    beforeEach(() => {
        stack = new MinStack<number>();
    });

    test("should initialize as empty", () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
        expect(stack.min()).toBeUndefined();
        expect(stack.peek()).toBeUndefined();
    });

    test("should maintain minimum value during push operations", () => {
        stack.push(5);
        expect(stack.min()).toBe(5);

        stack.push(3);
        expect(stack.min()).toBe(3);

        stack.push(7);
        expect(stack.min()).toBe(3);

        stack.push(2);
        expect(stack.min()).toBe(2);

        stack.push(9);
        expect(stack.min()).toBe(2);
    });

    test("should maintain minimum value during pop operations", () => {
        stack.push(5);
        stack.push(2);
        stack.push(7);
        stack.push(1);
        stack.push(3);

        expect(stack.min()).toBe(1);

        expect(stack.pop()).toBe(3);
        expect(stack.min()).toBe(1);

        expect(stack.pop()).toBe(1);
        expect(stack.min()).toBe(2);

        expect(stack.pop()).toBe(7);
        expect(stack.min()).toBe(2);

        expect(stack.pop()).toBe(2);
        expect(stack.min()).toBe(5);

        expect(stack.pop()).toBe(5);
        expect(stack.min()).toBeUndefined();
    });

    test("should handle duplicate minimum values correctly", () => {
        stack.push(3);
        stack.push(2);
        stack.push(2);
        stack.push(4);

        expect(stack.min()).toBe(2);

        expect(stack.pop()).toBe(4);
        expect(stack.min()).toBe(2);

        expect(stack.pop()).toBe(2);
        expect(stack.min()).toBe(2);

        expect(stack.pop()).toBe(2);
        expect(stack.min()).toBe(3);
    });

    test("should handle mixed operations correctly", () => {
        stack.push(10);
        expect(stack.min()).toBe(10);

        stack.push(5);
        expect(stack.min()).toBe(5);

        stack.pop();
        expect(stack.min()).toBe(10);

        stack.push(8);
        stack.push(3);
        stack.push(9);
        expect(stack.min()).toBe(3);

        stack.pop();
        stack.pop();

        expect(stack.min()).toBe(8);

        expect(stack.size()).toBe(2);
        expect(stack.peek()).toBe(8);
    });
});
