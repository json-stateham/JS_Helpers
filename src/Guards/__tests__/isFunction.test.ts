import { describe, expect, test } from 'vitest';
import { isFunction } from '../isFunction';

describe('isFunction', () => {
    test('should test that the param is a regular function', () => {
        expect(isFunction(() => {})).toBeTruthy();
        expect(isFunction(function fn(){})).toBeTruthy();
        expect(isFunction(class A {})).toBeFalsy();
        // @ts-expect-error
        expect(isFunction({})).toBeFalsy();
        // @ts-expect-error
        expect(isFunction(new Promise((res) => res(1)))).toBeFalsy();
    });
});
