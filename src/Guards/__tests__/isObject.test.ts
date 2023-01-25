import { describe, expect, test } from 'vitest';
import { isObject } from '../isObject';

describe('isObject', () => {
    test('should test that the param is an ordinary object', () => {
        expect(isObject({})).toBeTruthy();
        // @ts-expect-error
        expect(isObject([])).toBeFalsy();
        // @ts-expect-error
        expect(isObject(Promise.resolve(1))).toBeFalsy();
        // @ts-expect-error
        expect(isObject(null)).toBeFalsy();
    });
});