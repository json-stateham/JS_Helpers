import { describe, expect, test } from 'vitest';
import { pipeline } from './pipeline';

const splitBy = separator => str => str.split(separator);
const joinBy = separator => arr => arr.join(separator);
const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
const map = cb => arr => arr.map(cb);

const capitalizeSentence = pipeline(
  splitBy(/\s+/),
  map(capitalize),
  joinBy(' ')
);

describe('pipeline', () => {
  test('should apply a functions pipeline', () => {
    expect(capitalizeSentence('a pipeline should be applied')).toBe(
      'A Pipeline Should Be Applied'
    );
  });
});
