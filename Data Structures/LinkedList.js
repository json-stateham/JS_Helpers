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
    let node = new Node(value)
    let current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }
      current.next = node
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

  remove(value) {
    let current = this.head
    let prev = null

    while (current !== null) {
      if (current.value === value) {
        if (prev === null) {
          this.head = current.next
        } else {
          prev.next = current.next
        }
        this.size -= 1
        return current.value
      }
      prev = current
      current = current.next
    }
    return -1
  }

  indexOf(value) {
    let count = 0
    let current = this.head

    while (current !== null) {
      if (current.value === value) {
        return count
      }
      count += 1
      current = current.next
    }
    return -1
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
list.insertAt(5, 1)
list.printList()