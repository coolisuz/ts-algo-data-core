import { Queue } from "../../../src/data-structures/queue/queue";

describe("Queue", () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    describe("isEmpty", () => {
        test("should return true for a new queue", () => {
            expect(queue.isEmpty()).toBe(true);
        });

        test("should return false after elements are added", () => {
            queue.enqueue(10);
            expect(queue.isEmpty()).toBe(false);
        });
    });

    describe("size", () => {
        test("should return 0 for a new queue", () => {
            expect(queue.size()).toBe(0);
        });

        test("should correctly track size through enqueue and dequeue operations", () => {
            queue.enqueue(10).enqueue(20);
            expect(queue.size()).toBe(2);
            queue.dequeue();
            expect(queue.size()).toBe(1);
            queue.dequeue();
            expect(queue.size()).toBe(0);
        });
    });

    describe("enqueue", () => {
        test("should add an element to an empty queue", () => {
            queue.enqueue(10);
            expect(queue.size()).toBe(1);
            expect(queue.getFront()).toBe(10);
            expect(queue.getTail()).toBe(10);
        });

        test("should add multiple elements in correct order", () => {
            queue.enqueue(10).enqueue(20).enqueue(30);
            expect(queue.size()).toBe(3);
            expect(queue.getFront()).toBe(10);
            expect(queue.getTail()).toBe(30);
        });
    });

    describe("dequeue", () => {
        test("should return undefined from an empty queue", () => {
            expect(queue.dequeue()).toBeUndefined();
        });

        test("should remove elements in FIFO order", () => {
            queue.enqueue(10).enqueue(20).enqueue(30);
            expect(queue.dequeue()).toBe(10);
            expect(queue.size()).toBe(2);
            expect(queue.getFront()).toBe(20);
            expect(queue.dequeue()).toBe(20);
            expect(queue.dequeue()).toBe(30);
            expect(queue.isEmpty()).toBe(true);
        });
    });

    describe("getFront", () => {
        test("should return undefined for an empty queue", () => {
            expect(queue.getFront()).toBeUndefined();
        });

        test("should return the front element without removing it", () => {
            queue.enqueue(10).enqueue(20);
            expect(queue.getFront()).toBe(10);
            expect(queue.size()).toBe(2);
        });
    });

    describe("getTail", () => {
        test("should return undefined for an empty queue", () => {
            expect(queue.getTail()).toBeUndefined();
        });

        test("should return the last element without removing it", () => {
            queue.enqueue(10).enqueue(20);
            expect(queue.getTail()).toBe(20);
            expect(queue.size()).toBe(2);
        });
    });

    describe("clear", () => {
        test("should remove all elements from the queue", () => {
            queue.enqueue(10).enqueue(20).enqueue(30);
            expect(queue.clear().isEmpty()).toBe(true);
            expect(queue.size()).toBe(0);
        });

        test("should do nothing on an already empty queue", () => {
            expect(queue.clear().isEmpty()).toBe(true);
        });
    });

    describe("complex operations", () => {
        test("should handle a cycle of enqueue and dequeue operations", () => {
            queue.enqueue(10).enqueue(20);
            expect(queue.dequeue()).toBe(10);
            queue.enqueue(30);
            expect(queue.dequeue()).toBe(20);
            expect(queue.dequeue()).toBe(30);
            expect(queue.isEmpty()).toBe(true);
        });

        test("should maintain FIFO behavior with multiple operations", () => {
            queue.enqueue(10);
            expect(queue.getFront()).toBe(10);
            expect(queue.getTail()).toBe(10);

            queue.enqueue(20);
            expect(queue.getFront()).toBe(10);
            expect(queue.getTail()).toBe(20);

            expect(queue.dequeue()).toBe(10);
            expect(queue.getFront()).toBe(20);
            expect(queue.getTail()).toBe(20);

            queue.enqueue(30).enqueue(40);
            expect(queue.dequeue()).toBe(20);
            expect(queue.getFront()).toBe(30);
            expect(queue.getTail()).toBe(40);
        });
    });
});
