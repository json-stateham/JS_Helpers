import { describe, expect, test } from 'vitest';
import { createMultiArray } from './createMultiArray';

const multiArray = [
  [
    [0, 0],
    [0, 0],
    [0, 0],
  ],
  [
    [0, 0],
    [0, 0],
    [0, 0],
  ],
  [
    [0, 0],
    [0, 0],
    [0, 0],
  ],
  [
    [0, 0],
    [0, 0],
    [0, 0],
  ],
];

describe('createMultiArray', () => {
  test('should create a multi-dimentional array', () => {
    expect(createMultiArray(4, 3, 2)).toStrictEqual(multiArray);
  });
});
