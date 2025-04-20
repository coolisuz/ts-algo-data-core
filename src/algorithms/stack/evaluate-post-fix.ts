import { Stack } from "../../data-structures/stack/index";

/**
 * Evaluates a postfix (Reverse Polish Notation) expression and returns the result.
 * 
 * @param {string} exp - The postfix expression to evaluate with tokens separated by spaces
 * @returns {number} - The result of evaluating the expression
 * 
 * @time O(n) - Where n is the length of the expression
 * @space O(n) - Worst case, most of the tokens are operands pushed to the stack
 * 
 * Supported operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/) - Truncated toward zero

 * 
 * @constraints
 * - The expression represents a valid arithmetic postfix expression
 * - Division by zero will not occur
 * - All intermediate calculations fit within a 32-bit integer
 */
export function evaluatePostFix(exp: string): number {
    const stack = new Stack<number>();

    const arithmetics: Record<string, (a: number, b: number) => number> = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => Math.trunc(a / b),
        "*": (a, b) => a * b,
    };

    const tokens = exp.trim().split(/\s+/);

    for (const token of tokens) {
        if (token in arithmetics) {
            const num2 = stack.pop() as number;
            const num1 = stack.pop() as number;
            stack.push(arithmetics[token](num1, num2));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop() as number;
}
