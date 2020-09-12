const map = (fn, arr) => arr.map(fn)

const first = (xs) => xs[0]

const formatInitial = (x) => x.toUpperCase() + '.'

const intercalate = (sep, arr) => arr.join(sep)

const employees = ['Yann', 'Brigitte', 'John', 'William']

const initials = intercalate('\n', map(formatInitial, map(first, employees)))
// Y.
// B.
// J.
// W.
