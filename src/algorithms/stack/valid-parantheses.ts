/**
 * Given a string, exp, which may consist of opening and closing parentheses.
 * Your task is to check whether or not the string contains valid parenthesization.
 *
 * The conditions to validate are as follows:
 *    1. Every opening parenthesis should be closed by the same kind of parenthesis. Therefore, {) and [(]) strings are invalid.
 *    2. Every opening parenthesis must be closed in the correct order. Therefore, )( and ()(() are invalid.
 *
 * @constraints
 * 1 ≤ str.length ≤ 10^3
 * The string will only contain the following characters: (, ), [, ], {, }
 *
 * @time O(n) - where n is the length of the input string
 * @space O(n) - where n is the size of the stack
 */

import { Stack } from "../../data-structures/stack/index";

export function isBalanced(str: string): boolean {
    if (str.length < 1) return false;

    const stack = new Stack<string>();

    for (let char of str) {
        if (char === "(") {
            stack.push(")");
        } else if (char === "{") {
            stack.push("}");
        } else if (char === "[") {
            stack.push("]");
        } else if (char === ")" || char === "}" || char === "]") {
            if (stack.isEmpty() || stack.pop() !== char) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}
