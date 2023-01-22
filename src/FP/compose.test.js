import { describe, expect, test } from 'vitest';
import { compose } from './compose';

const splitBy = separator => str => str.split(separator);
const joinBy = separator => arr => arr.join(separator);
const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
const map = cb => arr => arr.map(cb);

const capitalizeSentence = compose(
  joinBy(' '),
  map(capitalize),
  splitBy(/\s+/)
);

describe('compose', () => {
  test('should apply a functions composition', () => {
    expect(capitalizeSentence('a composition should be applied')).toBe(
      'A Composition Should Be Applied'
    );
  });
});
