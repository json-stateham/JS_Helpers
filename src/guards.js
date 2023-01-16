const isFunction = fn =>
  Object.prototype.toString.call(fn) === '[object Function]' &&
  !fn.toString().startsWith('class'); // not a class constructor

const isArrowFunction = fn =>
  Object.prototype.toString.call(fn) === '[object Function]' &&
  !Boolean(fn.prototype); // arrow function doesn't have a .prototype

const isObject = obj =>
  Object.prototype.toString.call(obj) === '[object Object]';
