class Queue {
  constructor(maxSize = 5) {
    this.maxSize = maxSize;
    this.front = 1;
    this.back = 0;
    this.quantity = 0;
    this.storage = {};
  }

  enQueue(item) {
    this.quantity++;

    if (this.quantity <= this.maxSize) {
      this.storage[this.quantity] = item;
    }

    this.back = this.quantity;
  }

  deQueue() {
    delete this.storage[this.front];
    this.front++;
    this.quantity--;
    this.back = this.quantity;
  }

  getQuantity() {
    return this.quantity;
  }

  isEmpty() {
    return this.quantity === 0;
  }

  isFull() {
    return this.quantity >= this.maxSize;
  }

  peek() {
    return this.storage[this.quantity];
  }
}

module.exports = Queue;
