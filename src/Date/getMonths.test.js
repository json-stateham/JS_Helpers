import { describe, expect, test } from 'vitest';
import { getMonths } from './getMonths';

describe('getMonths', () => {
  test('should return an array of months', () => {
    expect(getMonths()).toStrictEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  test('should return an array of months (short)', () => {
    expect(getMonths('short')).toStrictEqual([
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]);
  });

  test('should return an array of month\'s digits', () => {
    expect(getMonths('2-digit')).toStrictEqual([
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
    ]);
  });
});
