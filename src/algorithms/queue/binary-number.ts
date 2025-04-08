import { Queue } from "../../data-structures/queue/index.ts";

/**
 * Generates binary representations from 1 to n
 *
 * @time O(n) - where n is the length of iteration from 1 to n
 * @space O(n) - where n is the length of the array storing binaries from 1 to n so it grows linearly
 *
 * @param {number} n - Positive integer limit
 * @returns {string[]} - The binary form of a number from 1 to n
 *
 * @constraints
 * 1 ≤ n ≤ 1000
 */
export function generateBinaryNumber(n: number): string[] {
    if (n < 1 || n > 1000) {
        throw new Error("Input must be between 1 and 1000");
    }

    const result: string[] = [];
    const queue = new Queue<string>();

    queue.enqueue("1");

    while (result.length < n) {
        const current = queue.dequeue();

        if (current !== null) {
            result.push(current!);

            queue.enqueue(current + "0");
            queue.enqueue(current + "1");
        }
    }

    return result;
}

/** Recursive divisive method of getting binary form of a number */
// function getBinary(num: number): string {
//     if (num === 0) return "0";
//     if (num === 1) return "1";

//     let remainder = num  % 2;

//     return getBinary(Math.floor(num /2 )) + remainder;
// }
