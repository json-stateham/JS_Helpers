class CircularQueue {
  constructor(size) {
    this.queue = []
    this.read = 0
    this.write = 0
    this.max = size - 1

    while (size > 0) {
      this.queue.push(null)
      size--
    }
  }

  print() {
    return this.queue
  }

  enqueue(item) {
    let q = this

    if (q.queue[q.write] === null) {
      q.queue[q.write++] = item

      if (q.write > q.max) q.write = 0
      return item
    }
    return null
  }

  dequeue() {
    let q = this

    if (q.queue[q.read] != null) {
      let item = q.queue[q.read]
      q.queue[q.read++] = null
      if (q.read > q.max) q.read = 0
      return item
    }
    return null
  }
}
