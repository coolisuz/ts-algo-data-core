import { Stack } from '../../data-structures/stack/index.ts';


/**
 * Given a stack of integers, stack, sort its elements in ascending order. 
 * In the resulting stack, the smallest element should be at the top.
 * 
 * @time O(n^2) - where nested loops runs linear
 * @space O(n) - extra memory used
 * @param {Stack<T>} stack is instance of Stack class where T is the type of data type used as a stack value 
 * @returns {Stack<T>} - sorted stack in ascending order 
 * 
 * @constraints
 * 1 ≤ stack.length ≤ 10^3
 * -10^3 ≤ stack[i] ≤ 10^3
 */


export function sortStack(stack: Stack<number>) {
    if (stack.size() < 2) return stack;
    
    const tempStack = new Stack();
    
    while (!stack.isEmpty()) {
        const current = stack.pop() as number;
        
        while (!tempStack.isEmpty()) {
            const top = tempStack.pop() as number;
            if (top > current) {
                stack.push(top);
            } else {
                tempStack.push(top);
                break;
            }
        }
        
        tempStack.push(current);
    }

    const ascendingStack = new Stack();
    while (!tempStack.isEmpty()) {
        ascendingStack.push(tempStack.pop());
    }
    
    return ascendingStack;
}
