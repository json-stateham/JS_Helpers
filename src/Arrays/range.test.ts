import { describe, expect, test } from 'vitest';
import { range } from './range';

describe('range', () => {
    test('should generate a range array', () => {
        expect(range(0, 5)).toStrictEqual([0, 1, 2, 3, 4, 5]);
        expect(range(3, 9, 3)).toStrictEqual([3, 6, 9]);
        expect(range(10, 50, 10)).toStrictEqual([10, 20, 30, 40, 50]);
    });
});
