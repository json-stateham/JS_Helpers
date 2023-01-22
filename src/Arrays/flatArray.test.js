import { describe, expect, test } from 'vitest';
import { flatArray } from './flatArray';

const nested = [1, 2, [3, 4, [5]]]

describe('flatArray', () => {
  test('should flat a nested array', () => {
    expect(flatArray(nested)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('should flat a nested array in depth', () => {
    expect(flatArray(nested, 1)).toStrictEqual([1, 2, 3, 4, [5]]);
  });
});
