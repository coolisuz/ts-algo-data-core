import { Stack } from '../../../src/data-structures/stack/index';
import { sortStack } from '../../../src/algorithms/stack/sort-stack';

describe('sortStack', () => {
  it('should return an empty stack if the input stack is empty', () => {
    const stack = new Stack<number>();
    const sorted = sortStack(stack);
    expect(sorted.isEmpty()).toBe(true);
  });

  it('should return the same stack if it has only one element', () => {
    const stack = new Stack<number>();
    stack.push(42);
    const sorted = sortStack(stack);
    expect(sorted.pop()).toBe(42);
    expect(sorted.isEmpty()).toBe(true);
  });

  it('should sort a stack in ascending order (worst-case: reverse input)', () => {
    const stack = new Stack<number>();
    [5, 4, 3, 2, 1].forEach((num) => stack.push(num)); 
    const sorted = sortStack(stack);
    expect(sorted.pop()).toBe(1); 
    expect(sorted.pop()).toBe(2);
    expect(sorted.pop()).toBe(3);
    expect(sorted.pop()).toBe(4);
    expect(sorted.pop()).toBe(5);
  });

  it('should sort a stack with duplicate values', () => {
    const stack = new Stack<number>();
    [3, 1, 2, 2, 4].forEach((num) => stack.push(num)); 
    const sorted = sortStack(stack);
    expect(sorted.pop()).toBe(1);
    expect(sorted.pop()).toBe(2);
    expect(sorted.pop()).toBe(2);
    expect(sorted.pop()).toBe(3);
    expect(sorted.pop()).toBe(4);
  });

  it('should handle a large stack (stress test)', () => {
    const stack = new Stack<number>();
    const size = 1000;

    for (let i = 0; i < size; i++) {
      stack.push(Math.floor(Math.random() * 1000)); 
    }

    const sorted = sortStack(stack);
    let prev = sorted.pop() as number;
    
    while (!sorted.isEmpty()) {
      const current = sorted.pop() as number;
      expect(current).toBeGreaterThanOrEqual(prev); 
      prev = current;
    }
  });
});