
const response = [
  { id: 1, name: "Item #1" },
  { id: 2, name: "Item #2" },
  { id: 1, name: "Item #1" },
  { id: 3, name: "Item #3" },
  { id: 2, name: "Item #2" },
  { id: 4, name: "Item #4" },
  { id: 1, name: "Item #1" },
  { id: 3, name: "Item #3" }
]

/** 
 * {id: 1, name: 'Item #1'},
 * {id: 2, name: 'Item #2'},
 * {id: 3, name: 'Item #3'},
 * {id: 4, name: 'Item #4'},
 */

const filterObjectByKey = (arr, key) =>
  Object.values(
    arr.reduce((acc, el) => {
      if (!acc[el[key]]) acc[el[key]] = el
      return acc
    }, {})
  )

const filterObjectByKey1 = (arr, key) =>
  arr.filter(
    (obj, pos, self) => self.map((x) => x[key]).indexOf(obj[key]) === pos
  )

const filterObjectByKey2 = (arr, key) => {
  const keys = new Set()
  return arr.filter((el) => !keys.has(el[key]) && keys.add(el[key]))
}

console.log(filterObjectByKey(response, "id"))
