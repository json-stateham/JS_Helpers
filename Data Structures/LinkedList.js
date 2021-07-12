class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  add(value) {
    const node = new Node(value)

    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head

      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size += 1
  }

  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next
      return this.size -= 1
    }

    let prev = this.head

    while (prev) {
      let current = prev.next

      if (current) {
        if (current.value === value) {
          prev.next = current.next
          return this.size -= 1
        }

        prev = current
      }
    }
  }

  addAt(index, value) {
    if (index < 0 || index >= this.size) return false

    let current = this.head

    if (index > 0) {
      let i = 0

      while (i + 1 !== index) {
        current = current.next
        i++
      }
    }

    const newNode = new Node(value)
    newNode.next = current.next

    if (index === 0) {
      this.head = newNode
    } else {
      current.next = newNode
    }
    this.size += 1
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return console.warn('Enter a valid index')
    } else {
      let node = new Node(value)
      let curr, prev

      curr = this.head

      if (index === 0) {
        node.next = this.head
        this.head = node
      } else {
        curr = this.head
        let it = 0

        while (it < index) {
          it += 1
          prev = curr
          curr = curr.next
        }

        node.next = curr
        prev.node = node
      }
      this.size += 1
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.warn('Enter a valid index')
    } else {
      let curr, prev, it = 0
      curr = this.head
      prev = curr

      if (index === 0) {
        this.head = curr.next
      } else {
        while (it < index) {
          it += 1
          prev = curr
          curr = curr.next
        }
        prev.next = curr.next
      }
      this.size -= 1

      return curr.value
    }
  }

  indexOf(el) {
    let current = this.head
    let index = -1
    let indexFound = false

    while (!indexFound && current) {
      index++
      if (current.value === el) {
        indexFound = true
      }
      current = current.next
    }
    return indexFound ? index : -1
  }

  elementAt(indexToFind) {
    let currentNode = this.head
    let currentElem = null
    let elemFound = false
    let index = -1

    while (!elemFound && currentNode) {
      index++
      currentElem = currentNode.value
      if (index === indexToFind) {
        elemFound = true
      }
      currentNode = currentNode.next
    }
    return elemFound ? currentElem : undefined
  }

  isEmpty() {
    return this.size === 0
  }

  listSize() {
    return this.size
  }

  printList() {
    let current = this.head
    let str = ''

    while (current) {
      str += current.value + ' '
      current = current.next
    }
    console.log(str)
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let lastNode = this.head
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  clear() {
    this.head = null
  }
}

const list = new LinkedList()

list.add(1)
list.add(2)
list.add(3)
list.remove(1)
console.log(list.indexOf(1))
console.log(list.indexOf(3))
console.log(list.indexOf(2))
console.log(list.elementAt(0))
list.addAt(0, 11)
list.printList()