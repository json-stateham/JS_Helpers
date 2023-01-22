export const createMultiArray = (...dimensions) => {
  const helper = dimIndex => {
    if (dimIndex >= dimensions.length) {
      return 0;
    } else {
      const dim = dimensions[dimIndex];
      const arr = [];
      for (let i = 0; i < dim; i += 1) {
        arr.push(helper(dimIndex + 1));
      }
      return arr;
    }
  };
  return helper(0);
};
