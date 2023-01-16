import { describe, expect, test } from 'vitest';
import { deepCopy } from './deepCopy';

const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const copy = deepCopy(obj);

describe('deepCopy', () => {
  test('should deep copy the object', () => {
    expect(copy).toMatchObject(obj);
    expect(copy).not.toBe(obj);
    copy.b.c = 3;
    expect(obj.b.c).toBe(2);
  });
});
