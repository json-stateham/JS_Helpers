import { describe, expect, test } from 'vitest';
import { pluralTimeEng } from '../pluralTime';

describe('pluralTime', () => {
  test('should return a pluralized time', () => {
    expect(pluralTimeEng(0)).toBe('0 minutes')
    expect(pluralTimeEng(1)).toBe('1 minute')
    expect(pluralTimeEng(5)).toBe('5 minutes')
  })
})
