import { describe, expect, test } from 'vitest';
import { relativeTime } from '../relativeTime';

const dayRelative = relativeTime({ unit: 'day' });
const yearRelative = relativeTime({ unit: 'year' });

describe('relativeTime', () => {
  test('should return a relative time', () => {
    expect(dayRelative(100)).toBe('in 100 days')
    expect(dayRelative(-100)).toBe('100 days ago')

    expect(yearRelative(100)).toBe('in 100 years')
    expect(yearRelative(-100)).toBe('100 years ago')
  })
})
