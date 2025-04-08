import { Queue } from "../../data-structures/queue/queue.ts";
import { StackLinkedList } from "../../data-structures/stack/index.ts";

/**
 * Reverses the first k elements of a queue.
 *
 * @time O(n) - where n is the number of elements in the queue
 * @space O(n) - where n is the size of the additional queue and stack
 *
 * @param {Queue<number>} queue - The input queue to be partially reversed
 * @param {number} k - Number of elements to reverse from the front
 * @returns {Queue<number> | null} Modified queue or null if invalid input
 *
 * @constraints
 * 1 ≤ queue.size() ≤ 10^3
 * 0 ≤ k ≤ queue.size()
 * -10^5 ≤ queue elements ≤ 10^5
 *
 * @example
 * const q = new Queue();
 * q.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5);
 * const result = reverseQueueFirstK(q, 3);
 * // result is now [3, 2, 1, 4, 5]
 */
export function reverseQueueFirstK(
    queue: Queue<number>,
    k: number,
): Queue<number> | null {

    if (!queue || !(queue instanceof Queue)) {
        throw new TypeError("First argument must be a valid Queue");
    }

    if (k < 0 || k > queue.size()) {
        return null;
    }


    if (queue.isEmpty() || k === 0) {
        return queue;
    }


    const stack = new StackLinkedList<number>();
    const newQueue = new Queue<number>();

    // Step 1: Extract first k elements and push to stack
    for (let i = 1; i <= k; i++) {
        const element = queue.dequeue();

        if (element !== undefined) {
            stack.push(element);
        }
    }

    // Step 2: Re-enqueue reversed first k elements
    while (stack.size() > 0) {
        const popped = stack.pop();
        newQueue.enqueue(popped!);
    }

    // Step 3: Enqueue remaining elements
    while (queue.size() > 0) {
        newQueue.enqueue(queue.dequeue()!);
    }

    return newQueue;
}
