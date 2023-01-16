import { describe, expect, test } from 'vitest';
import { flattenObject } from '../flattenObject';

const dictionary = {
  Key1: '1',
  Key2: {
    a: '2',
    b: '3',
    c: {
      d: '3',
      e: '1',
    },
  },
};

describe('flattenObject', () => {
  test('should flatten a dictionary', () => {
    expect(flattenObject(dictionary)).toStrictEqual({
      'Key1': '1',
      'Key2.a': '2',
      'Key2.b': '3',
      'Key2.c.d': '3',
      'Key2.c.e': '1',
    });
  });
});
