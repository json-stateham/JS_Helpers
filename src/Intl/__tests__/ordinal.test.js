import { describe, expect, test } from 'vitest';
import { ordinal } from '../ordinal';

describe('ordinal', () => {
  test('should return the ordinal number', () => {
    expect(ordinal(1)).toBe('1st');
    expect(ordinal(2)).toBe('2nd');
    expect(ordinal(3)).toBe('3rd');
    expect(ordinal(4)).toBe('4th');
  })
})
