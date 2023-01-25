export function myReduce(cb, initValue) {
  let accumulator = initValue ?? this[0];
  let start = initValue === undefined ? 1 : 0;
  for (let i = start; i < this.length; i += 1) {
    accumulator = cb(accumulator, this[i]);
  }
  return accumulator;
};
