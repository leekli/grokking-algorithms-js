const createStack = require("../data_structures/stack");

describe("createStack tests", () => {
  describe("createStack property tests", () => {
    test("stacks are created with a quantity of 0", () => {
      const testStack = new createStack();
      expect(testStack.quantity).toBe(0);
    });
    test("stacks are created with a storage set to an empty object", () => {
      const testStack = new createStack();
      expect(testStack.storage).toEqual({});
    });
    test("stacks are created with a maxSize set to 5 by default", () => {
      const testStack = new createStack();
      expect(testStack.maxSize).toBe(5);
    });
    test("stacks are created with a passed maxSize", () => {
      const testStack = new createStack(6);
      expect(testStack.maxSize).toBe(6);
    });
  });
  describe(".push method tests", () => {
    test(".push - increases the quantity by 1 on each push", () => {
      const testStack = new createStack();
      testStack.push("a");
      expect(testStack.quantity).toBe(1);
      testStack.push("b");
      expect(testStack.quantity).toBe(2);
    });
    test(".push - adds a single item to the storage", () => {
      const testStack = new createStack();
      testStack.push("a");
      expect(testStack.storage).toEqual({ 1: "a" });
    });
    test(".push - adds multiple items to the storage", () => {
      const testStack = new createStack();
      testStack.push("a");
      testStack.push("b");
      expect(testStack.storage).toEqual({ 1: "a", 2: "b" });
    });
    test(".push - throws an error is the stack is already full", () => {
      const testStack = new createStack(1);
      testStack.push("a");
      expect(testStack.push("b")).toBe("stack is full");
    });
  });
  describe(".pop method tests", () => {
    test(".pop - removes a single item from the storage", () => {
      const testStack = new createStack();
      testStack.push("a");
      testStack.pop();
      expect(testStack.storage).toEqual({});
    });
    test(".pop - reduces the quantity by 1", () => {
      const testStack = new createStack();
      testStack.push("a");
      testStack.pop();
      expect(testStack.quantity).toBe(0);
    });
    test(".pop - removes the most recent item from storage", () => {
      const testStack = new createStack();
      testStack.push("a");
      testStack.push("b");
      testStack.pop();
      expect(testStack.storage).toEqual({ 1: "a" });
    });
    test(".pop - returns the item removed from storage", () => {
      const testStack = new createStack();
      testStack.push("a");
      testStack.push("b");
      const removedItem = testStack.pop();
      expect(removedItem).toBe("b");
    });
  });
  describe(".isEmpty method tests", () => {
    test(".isEmpty - returns true when the stack has no items", () => {
      const testStack = new createStack();
      expect(testStack.isEmpty()).toBe(true);
    });
    test(".isEmpty - returns false when the stack has at least 1 item", () => {
      const testStack = new createStack();
      testStack.push("a");
      expect(testStack.isEmpty()).toBe(false);
    });
  });
  describe(".isFull method tests", () => {
    test(".isFull - returns true when the quantity is equal to the maxSize", () => {
      const testStack = new createStack(1);
      testStack.push("a");
      expect(testStack.isFull()).toBe(true);
    });
    test(".isFull - returns false when the stack has less items than the maxSize", () => {
      const testStack = new createStack(1);
      testStack.push("a");
      expect(testStack.isFull()).toBe(true);
    });
  });
  describe(".peek method tests", () => {
    test(".peek - returns the most recent item added to the storage", () => {
      const testStack = new createStack();
      testStack.push(0);
      expect(testStack.peek()).toBe(0);
    });
    test(".peek - returns null if the storage is empty", () => {
      const testStack = new createStack();
      expect(testStack.peek()).toBe(null);
    });
  });
});
