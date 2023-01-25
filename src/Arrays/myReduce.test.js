import { describe, expect, test } from 'vitest';
import { myReduce } from './myReduce';

Array.prototype.myReduce = myReduce;

describe('myReduce', () => {
  test('should apply reduce to the array without the initial value', () => {
    expect([1, 2, 3, 4, 5].myReduce((acc, el) => acc + el)).toEqual(15);
  });

  test('should apply reduce to the array with the initial value', () => {
    expect([1, 2, 3, 4, 5].myReduce((acc, el) => acc + el, 10)).toEqual(25);
  });

  test('should count the chars in the array', () => {
    expect(
      ['a', 'b', 'a', 'c'].myReduce((acc, el) => {
        acc[el] = acc[el] + 1 || 1;
        return acc;
      }, {})
    ).toEqual({ a: 2, b: 1, c: 1 });
  });
});
