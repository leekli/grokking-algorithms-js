const createQueue = require("../data_structures/queue");

describe("createQueue tests", () => {
  describe("createQueue property tests", () => {
    test("queues are created with a quantity of 0", () => {
      const testQueue = new createQueue();
      expect(testQueue.quantity).toBe(0);
    });
    test("queues are created with a storage set to an empty object", () => {
      const testQueue = new createQueue();
      expect(testQueue.storage).toEqual({});
    });
    test("queues are created with a maxSize set to 5 by default", () => {
      const testQueue = new createQueue();
      expect(testQueue.maxSize).toBe(5);
    });
    test("queues are created with a passed maxSize", () => {
      const testQueue = new createQueue(6);
      expect(testQueue.maxSize).toBe(6);
    });
    test("queues have a front property set to 1 on initalisation", () => {
      const testQueue = new createQueue();
      expect(testQueue.front).toBe(1);
    });
    test("queues have a back property set to 0 on initalisation", () => {
      const testQueue = new createQueue();
      expect(testQueue.back).toBe(0);
    });
    test("returns a function when enQueue property exists in queue", () => {
      const testQueue = new createQueue();
      expect(typeof testQueue.enQueue).toBe("function");
    });
    test("returns a function when deQueue property exists in queue", () => {
      const testQueue = new createQueue();
      expect(typeof testQueue.deQueue).toBe("function");
    });
    test("returns a function when getQuantity property exists in queue", () => {
      const testQueue = new createQueue();
      expect(typeof testQueue.getQuantity).toBe("function");
    });
    test("returns a function when isEmpty property exists in queue", () => {
      const testQueue = new createQueue();
      expect(typeof testQueue.isEmpty).toBe("function");
    });
    test("returns a function when isFull property exists in queue", () => {
      const testQueue = new createQueue();
      expect(typeof testQueue.isFull).toBe("function");
    });
    test("returns a function when peek property exists in queue", () => {
      const testQueue = new createQueue();
      expect(typeof testQueue.peek).toBe("function");
    });
  });
  describe("createQueue method tests", () => {
    test("should add one item to the queue when enQueue method is invoked", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      expect(testQueue.storage).toEqual({ 1: "apple" });
    });
    test("should add multiple items to the queue when enQueue method is invoked, first item added at front of queue", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      expect(testQueue.storage).toEqual({ 1: "apple", 2: "pear" });
    });
    test("should not add an item to the queue if it exceeds the maxSize", () => {
      const testQueue = new createQueue(2);
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.enQueue("banana");
      expect(testQueue.storage).toEqual({ 1: "apple", 2: "pear" });
    });
    test("should remove the only single item in the queue when deQueue is invoked", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      testQueue.deQueue();
      expect(testQueue.storage).toEqual({});
    });
    test("should remove the two items in the queue when deQueue is invoked", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.enQueue("banana");
      testQueue.deQueue();
      testQueue.deQueue();
      expect(testQueue.storage).toEqual({ 3: "banana" });
    });
    test("should return the total of items in the queue with one item within it", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      expect(testQueue.getQuantity()).toBe(1);
    });
    test("should return the total of items in the queue when multiple items are within it", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.enQueue("banana");
      expect(testQueue.getQuantity()).toBe(3);
    });
    test("should return the total of items in the queue when multiple items are within it, after both enQueue and deQueue operations", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.enQueue("banana");
      testQueue.enQueue("strawberries");
      testQueue.deQueue();
      testQueue.deQueue();
      testQueue.enQueue("strawberries");
      expect(testQueue.getQuantity()).toBe(3);
    });
    test("should return true when isEmpty method is invoked to show the queue is empty", () => {
      const testQueue = new createQueue();
      expect(testQueue.isEmpty()).toBe(true);
    });
    test("should return false when isEmpty method is invoked to show the queue is not empty, when single item is added", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      expect(testQueue.isEmpty()).toBe(false);
    });
    test("should return false when isEmpty method is invoked to show the queue is not empty, when multiple items are added", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.enQueue("banana");
      expect(testQueue.isEmpty()).toBe(false);
    });
    test("should return true when isEmpty method is invoked to show the queue is not empty, after multiple items have been added and then deQueued to empty the queue", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.deQueue();
      testQueue.deQueue();
      expect(testQueue.isEmpty()).toBe(true);
    });
    test("should return false when isFull method is invoked to show the queue is not full", () => {
      const testQueue = new createQueue(2);
      testQueue.enQueue("apple");
      expect(testQueue.isFull()).toBe(false);
    });
    test("should return true when isFull method is invoked to show the queue is full", () => {
      const testQueue = new createQueue(1);
      testQueue.enQueue("apple");
      expect(testQueue.isFull()).toBe(true);
    });
    test("should return true when isFull method is invoked to show the queue is full, with multiple items", () => {
      const testQueue = new createQueue(3);
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.enQueue("banana");
      expect(testQueue.isFull()).toBe(true);
    });
    test("should return true when isFull method is invoked to show the queue is full, when a maxSize is not given to the queue, should max out at 5", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.enQueue("banana");
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.enQueue("banana");
      expect(testQueue.isFull()).toBe(true);
    });
    test("should return the item at the front of the queue when peek method is invokved, when single item is added to the queue", () => {
      const testQueue = new createQueue(3);
      testQueue.enQueue("apple");
      expect(testQueue.peek()).toBe("apple");
    });
    test("should return the item at the front of the queue when peek method is invokved, when multiple items are added to the queue", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.enQueue("banana");
      expect(testQueue.peek()).toBe("banana");
    });
    test("should return the item at the front of the queue when peek method is invokved, when multiple items are added to the queue, and some deQueues inboked", () => {
      const testQueue = new createQueue();
      testQueue.enQueue("apple");
      testQueue.enQueue("pear");
      testQueue.enQueue("banana");
      testQueue.deQueue();
      testQueue.deQueue();
      testQueue.enQueue("strawberry");
      expect(testQueue.peek()).toBe("strawberry");
    });
  });
});
