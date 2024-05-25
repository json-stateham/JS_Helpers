/**
 * Retrieves a value from a nested object based on a given dot-separated string path.
 * @param {object} obj - The object from which the value is to be retrieved.
 * @param {string} path - The path to the desired value in a dot-delimited string.
 * @param {*} [defaultValue='Not found'] - The default value that is returned if the path does not exist.
 * @returns {*} The value found at the specified path, or the default value if none is found.
 * @example
 * const nestedObj = {
 *   a: {
 *     b: {
 *       c: 'd',
 *     },
 *     e: 0,
 *   },
 * };
 * 
 * getValueByStringPath(nestedObj, 'a.b'); // -> { c : 'd' }
 * getValueByStringPath(nestedObj, 'a.b.c'); // -> 'd'
 * getValueByStringPath(nestedObj, 'a.e'); // -> 0
 * getValueByStringPath(nestedObj, 'x.x.e'); // -> 'Not found'
 * getValueByStringPath(nestedObj, 'a.x.e', 'Default'); // -> 'Default'
 */
export const getValueByStringPath = (obj, path, defaultValue = 'Not found') => {
  return path
    .split('.')
    .reduce((result, item) => result[item] ?? defaultValue, obj);
};
