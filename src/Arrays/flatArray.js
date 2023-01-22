export const flatArray = (arr, depth = Infinity) =>
  depth > 0
    ? arr.reduce(
        (res, item) =>
          res.concat(Array.isArray(item) ? flatArray(item, depth - 1) : item),
        []
      )
    : arr.slice();
