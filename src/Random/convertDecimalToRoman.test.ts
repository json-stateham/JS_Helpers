import { describe, expect, test } from 'vitest';
import { convertDecimalToRoman } from './convertDecimalToRoman';

describe('convertDecimalToRoman', () => {
  test('should convert a decimal to a Roman numeral', () => {
    expect(convertDecimalToRoman(1)).toBe('I')
    expect(convertDecimalToRoman(798)).toBe('DCCXCVIII')
    expect(convertDecimalToRoman(2021)).toBe('MMXXI')
    expect(convertDecimalToRoman(1000)).toBe('M')
  });
});
