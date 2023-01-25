export const isFunction = (fn: Function) =>
    fn && fn.constructor.name === 'Function' &&
    !String(fn).startsWith('class'); // not a class
