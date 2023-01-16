import { describe, expect, test } from 'vitest';
import { deepFreeze } from '../deepFreeze';

const frozenObj = deepFreeze({
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
});

describe('deepFreeze', () => {
  test('should deep freeze the object', () => {
    expect(Object.isFrozen(frozenObj)).toBe(true)
    expect(Object.isFrozen(frozenObj.c)).toBe(true)
    expect(() => (frozenObj.c.d = 5)).toThrowError(
      "Cannot assign to read only property 'd' of object '#<Object>'"
    );
  });
});
