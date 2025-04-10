/**
 * Finds the next greater element for each element in the array
 * 
 * Time Complexity: O(n) - Each element is pushed and popped at most once
 * Space Complexity: O(n) - For the stack and result array
 * 
 * @param arr - The input array of integers
 * @returns An array where each position contains the next greater element for the corresponding element in the input array
 */
import { Stack } from '../../data-structures/stack/index.ts';


export function nextGreaterElement(arr: number[]): number[] {
    const n = arr.length;
    const result: number[] = new Array(n).fill(-1);
    const stack = new Stack<number>();
    
    for (let i = n - 1; i >= 0; i--) {

        while (!stack.isEmpty() && stack.peek()! <= arr[i]) {
            stack.pop();
        }

        if (!stack.isEmpty()) {
            result[i] = stack.peek() as number;
        }

        stack.push(arr[i]);
    }
    
    return result;
}


/**
 * Brute force approach with O(n^2) where each elemented looped at least twice n^2
 * @time O(n^2)
 * @space O(n) - extra space used equal to the length of the input array
 */
// export function nextGreaterElement(arr: number[]): number[] {
//     const stack = [];

//     for (let i=0; i<arr.length; i++) {
//         let greater: number = -1;

//         for (let j = i+1; j<arr.length; j++) {
//             if (arr[j] > arr[i]) {
//                 greater = arr[j];
//                 break;
//             }
//         }

//         stack.push(greater);
//     }

//     return stack;
// }