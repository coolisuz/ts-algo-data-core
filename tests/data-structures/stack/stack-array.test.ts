import { Stack } from '../../../src/data-structures/stack';

describe('Stack', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack();
    });

    describe('push', () => {
        test('should add an element to an empty stack', () => {
            stack.push(1);
            expect(stack.size()).toBe(1);
            expect(stack.peek()).toBe(1);
        });

        test('should add multiple elements and maintain correct order', () => {
            stack.push(1).push(2).push(3);
            expect(stack.size()).toBe(3);
            expect(stack.peek()).toBe(3);
        });
    });

    describe('pop', () => {
        test('should return undefined for an empty stack', () => {
            expect(stack.pop()).toBeUndefined();
        });

        test('should remove and return the last element', () => {
            stack.push(1).push(2);
            expect(stack.pop()).toBe(2);
            expect(stack.size()).toBe(1);
        });
    });

    describe('peek', () => {
        test('should return undefined for an empty stack', () => {
            expect(stack.peek()).toBeUndefined();
        });

        test('should return the last element without removing it', () => {
            stack.push(1).push(2);
            expect(stack.peek()).toBe(2);
            expect(stack.size()).toBe(2);
        });
    });

    describe('isEmpty', () => {
        test('should return true for an empty stack', () => {
            expect(stack.isEmpty()).toBe(true);
        });

        test('should return false for a non-empty stack', () => {
            stack.push(1);
            expect(stack.isEmpty()).toBe(false);
        });
    });

    describe('size', () => {
        test('should return 0 for an empty stack', () => {
            expect(stack.size()).toBe(0);
        });

        test('should return the correct count of elements', () => {
            stack.push(1).push(2).push(3);
            expect(stack.size()).toBe(3);
        });
    });

    describe('clear', () => {
        test('should remove all elements from the stack', () => {
            stack.push(1).push(2).push(3);
            stack.clear();
            expect(stack.isEmpty()).toBe(true);
            expect(stack.size()).toBe(0);
        });

        test('should not error when clearing an empty stack', () => {
            expect(() => stack.clear()).not.toThrow();
            expect(stack.isEmpty()).toBe(true);
        });
    });
});