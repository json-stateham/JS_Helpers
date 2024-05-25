import { describe, expect, test } from 'vitest';
import { getValueByStringPath } from '../getValueByStringPath';

const nestedObj = {
  a: {
    b: {
      c: 'value C',
    },
    e: 0,
  },
};

describe('getValueByStringPath', () => {
  test('should work as expected', () => {
    expect(getValueByStringPath(nestedObj, 'a.b')).toStrictEqual({ c: 'value C' });
    expect(getValueByStringPath(nestedObj, 'a.b.c')).toBe('value C');
    expect(getValueByStringPath(nestedObj, 'a.e')).toBe(0);
    expect(getValueByStringPath(nestedObj, 'x.x.e')).toBe('Not found');
    expect(getValueByStringPath(nestedObj, 'a.x.e', 'Default')).toBe('Default');
  });
});
