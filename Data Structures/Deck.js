class Deck {
  constructor() {
    this.deck = [];
  }

  enqueueLeft(item) {
    this.deck = [item].concat(this.deck);
  }

  enqueueRight(item) {
    this.deck.push(item);
  }

  dequeueLeft() {
    this.deck = this.deck.splice(1);
  }

  dequeueRight() {
    this.deck.pop();
  }

  clear() {
      this.deck = [];
  }

  print() {
    return this.deck;
  }
}

const deck = new Deck();
