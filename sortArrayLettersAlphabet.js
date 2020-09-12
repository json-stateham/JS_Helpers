//Отсортировать буквы в алфавитном порядке

const arr = ['a', 'd', 'c', 'a', 'z', 'g']

const sortedAlphabet = arr.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1))
