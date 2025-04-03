import { findProduct } from '../../../src/algorithms/arrays/product-of-array';

describe('findProduct', () => {
  test('should handle array with mixed positive and negative values', () => {
    const result = findProduct([5, 3, -1, 6, 4]);
    expect(result).toEqual([-72, -120, 360, -60, -90]);
  });

  test('should handle array with multiple negative values', () => {
    const result = findProduct([-7, 6, 4, 3, 1, 2]);
    expect(result).toEqual([144, -168, -252, -336, -1008, -504]);
  });

  test('should handle array with positive values only', () => {
    const result = findProduct([1, 2, 3, 4]);
    expect(result).toEqual([24, 12, 8, 6]);
  });

  test('should handle minimal array with two elements', () => {
    const result = findProduct([-1, 1]);
    expect(result).toEqual([1, -1]);
  });

  test('should throw error for invalid input', () => {
    // @ts-ignore - intentionally passing invalid input for testing
    expect(() => findProduct('not an array')).toThrow();
  });
});