import { Queue } from "../../../src/data-structures/queue";
import { reverseQueueFirstK } from '../../../src/algorithms/queue/reverse-elements';

describe('reverse', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
        [1, 2, 3, 4, 5].forEach(n => queue.enqueue(n));
    });

    function verifyQueueOrder(q: Queue<number> | null, expected: number[]) {
        if (!q) return false;
        for (const num of expected) {
            if (q.dequeue() !== num) return false;
        }
        return q.isEmpty();
    }

    test('should reverse first k elements', () => {
        const result = reverseQueueFirstK(queue, 3);
        expect(verifyQueueOrder(result, [3, 2, 1, 4, 5])).toBe(true);
    });

    test('should handle k = 0 (no reversal)', () => {
        const result = reverseQueueFirstK(queue, 0);
        expect(verifyQueueOrder(result, [1, 2, 3, 4, 5])).toBe(true);
    });

    test('should handle k = queue size (reverse all)', () => {
        const result = reverseQueueFirstK(queue, 5);
        expect(verifyQueueOrder(result, [5, 4, 3, 2, 1])).toBe(true);
    });

    test('should return null for invalid k', () => {
        expect(reverseQueueFirstK(queue, -1)).toBeNull();
        expect(reverseQueueFirstK(queue, 6)).toBeNull();
    });

    test('should return null for empty queue', () => {
        const emptyQueue = new Queue<number>();
        expect(reverseQueueFirstK(emptyQueue, 2)).toBeNull();
    });

    test('should handle single element queue', () => {
        const singleQueue = new Queue<number>();
        singleQueue.enqueue(1);
        const result = reverseQueueFirstK(singleQueue, 1);
        expect(verifyQueueOrder(result, [1])).toBe(true);
    });

    test('should maintain original queue when k=1', () => {
        const result = reverseQueueFirstK(queue, 1);
        expect(verifyQueueOrder(result, [1, 2, 3, 4, 5])).toBe(true);
    });
});