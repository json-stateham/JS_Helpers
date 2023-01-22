// https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch05

export const compose = (...fns) =>
  fns.reduceRight(
    (f, g) =>
      (...args) =>
        g(f(...args))
  )
