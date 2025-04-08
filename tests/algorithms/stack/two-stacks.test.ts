import { TwoStack } from '../../../src/algorithms/stack/two-stacks';

describe('TwoStack', () => {
  const SIZE = 5;
  let twoStack: TwoStack;

  beforeEach(() => {
    twoStack = new TwoStack(SIZE);
  });

  describe('Initialization', () => {
    it('should throw error for invalid size', () => {
      expect(() => new TwoStack(0)).toThrow('Size must be a positive integer');
      expect(() => new TwoStack(-1)).toThrow('Size must be a positive integer');
    });
  });

  describe('Stack 1 Operations', () => {
    it('should push and pop elements from stack 1', () => {
      twoStack.push1(10);
      twoStack.push1(20);
      
      expect(twoStack.pop1()).toBe(20);
      expect(twoStack.pop1()).toBe(10);

    });

    it('should throw overflow when stack 1 is full', () => {
      for (let i = 0; i < SIZE; i++) {
        twoStack.push1(i);
      }
      
      expect(() => twoStack.push1(99)).toThrow('Stack Overflow');
    });

    it('should throw underflow when popping empty stack 1', () => {
      expect(() => twoStack.pop1()).toThrow('Stack Underflow');
    });
  });

  describe('Stack 2 Operations', () => {
    it('should push and pop elements from stack 2', () => {
      twoStack.push2(30);
      twoStack.push2(40);
      
      expect(twoStack.pop2()).toBe(40);
      expect(twoStack.pop2()).toBe(30);

    });

    it('should throw overflow when stack 2 is full', () => {
      for (let i = 0; i < SIZE; i++) {
        twoStack.push2(i);
      }
      
      expect(() => twoStack.push2(99)).toThrow('Stack Overflow');
    });

    it('should throw underflow when popping empty stack 2', () => {
      expect(() => twoStack.pop2()).toThrow('Stack Underflow');
    });
  });

  describe('Both Stacks Interaction', () => {
    it('should use shared space efficiently', () => {
      twoStack.push1(1);
      twoStack.push1(2);
      twoStack.push2(3);
      twoStack.push2(4);
      twoStack.push2(5);
      
      expect(() => twoStack.push1(6)).toThrow('Stack Overflow');
      
      expect(twoStack.pop1()).toBe(2);
      expect(twoStack.pop2()).toBe(5);
    });

    it('should handle alternating operations', () => {
      twoStack.push1(1);
      twoStack.push2(2);
      twoStack.push1(3);
      twoStack.push2(4);
      
      expect(twoStack.pop1()).toBe(3);
      expect(twoStack.pop2()).toBe(4);
      expect(twoStack.pop1()).toBe(1);
      expect(twoStack.pop2()).toBe(2);
    });
  });

  describe('Edge Cases', () => {
    it('should handle maximum capacity', () => {
      twoStack.push1(1);
      twoStack.push1(2);
      twoStack.push1(3);
      twoStack.push2(4);
      twoStack.push2(5);
      
      expect(() => twoStack.push1(6)).toThrow('Stack Overflow');
      expect(() => twoStack.push2(6)).toThrow('Stack Overflow');
    });

    it('should maintain independence of stacks', () => {
      twoStack.push1(10);
      twoStack.push2(20);
      
      expect(twoStack.pop1()).toBe(10);
      expect(twoStack.pop2()).toBe(20);
    });
  });
});