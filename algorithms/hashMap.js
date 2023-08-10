class HashMap {
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  get(key) {
    return this.storage[key];
  }

  set(key, value) {
    this.storage[key] = value;

    return "[object Map]";
  }

  has(key) {
    if (this.storage.hasOwnProperty(key)) {
      return true;
    }

    return false;
  }

  delete(key) {
    if (this.storage.hasOwnProperty(key)) {
      delete this.storage[key];

      return true;
    }

    return false;
  }

  clear() {
    for (const element in this.storage) {
      delete this.storage[element];
    }

    return undefined;
  }

  *keys() {
    for (const key in this.storage) {
      if (this.storage.hasOwnProperty(key)) {
        yield key;
      }
    }
  }

  *values() {
    for (const key in this.storage) {
      yield this.storage[key];
    }
  }

  *entries() {
    for (const key in this.storage) {
      yield [key, this.storage[key]];
    }
  }
}

module.exports = HashMap;
