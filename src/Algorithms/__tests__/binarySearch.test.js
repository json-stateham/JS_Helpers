import { describe, expect, test } from 'vitest'
import { binarySearch } from '../binarySearch'

const sortedArr = [1, 2, 3, 4, 5]

describe('binarySearch', () => {
    test('should find the target and return its index', () => {
        expect(binarySearch(sortedArr, 5)).toBe(4)
    })

    test('shouldn\'t find the target and return null', () => {
        expect(binarySearch(sortedArr, 10)).toBe(null)
    })
}) 