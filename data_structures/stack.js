class Stack {
  constructor(maxSize = 5) {
    this.quantity = 0;
    this.storage = {};
    this.maxSize = maxSize;
  }

  push(item) {
    if (this.quantity === this.maxSize) return "stack is full";
    this.quantity++;
    this.storage[this.quantity] = item;
  }

  pop() {
    const itemToRemove = this.storage[this.quantity];
    delete this.storage[this.quantity];
    this.quantity--;
    return itemToRemove;
  }

  isEmpty() {
    return this.quantity === 0;
  }

  isFull() {
    return this.quantity === this.maxSize;
  }

  peek() {
    if (this.quantity in this.storage === false) return null;
    return this.storage[this.quantity];
  }
}

module.exports = Stack;
