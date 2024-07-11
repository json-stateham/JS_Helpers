import { describe, expect, test } from 'vitest';
import { reverseNumber } from './reverseNumber';

describe('reverseNumber', () => {
  test('should reverse input number', () => {
    expect(reverseNumber(123)).toBe(321);
    expect(reverseNumber(-123)).toBe(-321);
  })
})
