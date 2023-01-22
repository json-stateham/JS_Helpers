import { describe, expect, test } from 'vitest';
import { demethodize } from '../demethodize';

describe('demethodize', () => {
  const toUpperCase = demethodize(String.prototype.toUpperCase);

  test('should extract the method from the prototype', () => {
    expect(toUpperCase('abc')).toBe('ABC');
  });
});
