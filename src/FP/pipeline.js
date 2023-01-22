export const pipeline = (...fns) =>
  fns.reduce(
    (g, f) =>
      (...args) =>
        f(g(...args))
  );
