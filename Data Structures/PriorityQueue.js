function PriorityQueue() {
  this.collection = [['human', 1], ['kitten', 2], ['fish', 2], ['bear', 2]]

  this.printCollection = () => {
    console.log(this.collection)
  }

  this.enqueue = (newItem) => {
    if (this.isEmpty()) {
      return this.collection.push(newItem)
    }

    this.collection = this.collection.reverse()

    const foundIdx = this.collection.findIndex(item => newItem[1] >= item[1])

    if (foundIdx === -1) {
      this.collection.push(newItem)
    } else {
      this.collection.splice(foundIdx, 0, newItem)
    }

    this.collection = this.collection.reverse()
  }

  this.dequeue = () => {
    if (!this.isEmpty()) {
      return this.collection.shift()[0]
    } else {
      return 'Queue is empty'
    }
  }

  this.front = () => {
    return this.collection[0][0]
  }

  this.size = () => {
    return this.collection.length
  }

  this.isEmpty = () => {
    return !!(!this.collection.length)
  }
}

const priorityQueue = new PriorityQueue()

priorityQueue.printCollection()
priorityQueue.enqueue(['alien', 1])
priorityQueue.printCollection()
priorityQueue.dequeue()
priorityQueue.printCollection()
