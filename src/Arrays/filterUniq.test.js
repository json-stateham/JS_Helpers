import { describe, expect, test } from 'vitest'
import { filterUniqByKey } from './filterUniqByKey'

const data = [
    { id: 1, name: 'Item #1' },
    { id: 2, name: 'Item #2' },
    { id: 1, name: 'Item #1' },
    { id: 3, name: 'Item #3' },
    { id: 2, name: 'Item #2' },
  ];

describe('filterUniqByKey', () => {
    test('should filter unique values by key', () => {
        expect(filterUniqByKey(data, 'name')).toStrictEqual( [
            { id: 1, name: 'Item #1' },
            { id: 2, name: 'Item #2' },
            { id: 3, name: 'Item #3' },
          ])
    })
}) 