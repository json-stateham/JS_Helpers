export const deepFreeze = <T>(obj: T): Readonly<T> => {
  if (obj && obj.constructor.name === 'Object' && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(prop => deepFreeze(obj[prop]));
  }
  return obj;
};
