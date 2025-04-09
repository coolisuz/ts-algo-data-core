import { evaluatePostFix } from '../../../src/algorithms/stack/evaluate-post-fix'

describe('evaluatePostFix', () => {
  test('should evaluate a simple subtraction expression', () => {
    expect(evaluatePostFix('9 2 1 * - 8 - 4 +')).toBe(3);
  });

  test('should handle division with truncation toward zero', () => {
    expect(evaluatePostFix('10 3 /')).toBe(3)
    expect(evaluatePostFix('-10 3 /')).toBe(-3)
  });

  test('should evaluate a complex expression with multiple operations', () => {
    expect(evaluatePostFix('5 1 2 + 4 * + 3 -')).toBe(14);
  });

  test('should handle single digit expression correctly', () => {
    expect(evaluatePostFix('5')).toBe(5);
  });
});