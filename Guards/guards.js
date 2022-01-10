const isFunction = f =>
  f &&
  typeof f === 'function' &&
  Object.prototype.toString.call(f) === '[object Function]'

const isObject = obj =>
  obj &&
  typeof obj === 'object' &&
  Object.prototype.toString.call(obj) === '[object Object]'
