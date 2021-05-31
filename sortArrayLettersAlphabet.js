//Отсортировать буквы в алфавитном порядке

const arrChars = ['a', 'e', 'h', 'd', 'c', 'a', 'z', 'g']

const sortAlphabet = arr => [...arr].sort((a, b) => a.localeCompare(b))

console.log(sortAlphabet(arrChars)) // ["a","a","c","d","e","g","h","z"]