class PriorityQueue {
  constructor(collection) {
    this.collection = collection;
  }
  
  enqueue = newItem => {
    if (this.isEmpty()) return this.collection.push(newItem);

    const lowerPriorityIndex = this.collection.findLastIndex(item => newItem[1] <= item[1]);

    if (lowerPriorityIndex === -1) {
      this.collection.push(newItem);
    } else {
      this.collection.splice(lowerPriorityIndex, 0, newItem);
    }
  };  
  
  dequeue = () => this.collection.shift();
  size = () => this.collection.length;
  first = () => this.collection[0];  
  last = () => this.collection[this.size() - 1];
  isEmpty = () => this.size() === 0;
  print = () => console.log(this.collection);
}

const baseQueue = [
  ['human', 1],
  ['kitten', 2],
];

const priorityQueue = new PriorityQueue(baseQueue);

priorityQueue.enqueue(['alien', 1]);
priorityQueue.enqueue(['bear', 3]);
priorityQueue.enqueue(['mosquito', 4]);
priorityQueue.dequeue();
priorityQueue.print();