const isArrowFunction = fn =>
  fn &&
  fn.constructor.name === 'Function' &&
  Object.prototype.toString.call(f) === '[object Function]' &&
  !fn.toString().startsWith('class') && // not a class
  !['resolve', 'reject'].includes(fn.name) && // not a Promise.resolve or Promise.reject
  !!fn?.prototype; // arrow fn doesn't has .prototype

const isObject = obj =>
  obj &&
  obj.constructor.name === 'Object' &&
  Object.prototype.toString.call(obj) === '[object Object]';
