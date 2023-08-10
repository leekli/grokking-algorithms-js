const HashMap = require("../algorithms/hashMap");

describe("Hash Map tests (class based)", () => {
  test("should be an instance of the HashMap Class", () => {
    const newMap = new HashMap();
    expect(newMap).toBeInstanceOf(HashMap);
  });
  test("should have a .storage property", () => {
    const newMap = new HashMap();
    expect(newMap.storage).toBeInstanceOf(Object);
    expect(newMap.storage).toEqual({});
  });
  test("should have a size() method", () => {
    const newMap = new HashMap();
    expect(typeof newMap.size).toBe("function");
  });
  test("should return the size of the Map when size() method is invoked", () => {
    const newMap = new HashMap();
    expect(newMap.size()).toBe(0);
  });
  test("should have a set method", () => {
    const newMap = new HashMap();
    expect(typeof newMap.set).toBe("function");
  });
  test("should add the item to the Map when set() method is invoked", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    expect(newMap.size()).toBe(1);
  });
  test("should return [object Map] when set() method is invoked", () => {
    const newMap = new HashMap();
    expect(newMap.set("foo", "bar")).toBe("[object Map]");
  });
  test("should have a get method", () => {
    const newMap = new HashMap();
    expect(typeof newMap.get).toBe("function");
  });
  test("should return the item held in storage when get() method is invoked with a key which exists", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    expect(newMap.get("foo")).toBe("bar");
  });
  test("should return undefined when get() method is invoked with a key which does not exist", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    expect(newMap.get("bar")).toBe(undefined);
  });
  test("should have a has() method", () => {
    const newMap = new HashMap();
    expect(typeof newMap.has).toBe("function");
  });
  test("should return true if the specified key exists in the Map when .has() method is invoked", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    expect(newMap.has("foo")).toBe(true);
  });
  test("should return false if the specified key does not exist in the Map when .has() method is invoked", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    expect(newMap.has("baz")).toBe(false);
  });
  test("should have a delete() method", () => {
    const newMap = new HashMap();
    expect(typeof newMap.delete).toBe("function");
  });
  test("should return true if delete() method is invoked and the element existed in the Map and has been successfully deleted", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    expect(newMap.delete("foo")).toBe(true);
    expect(newMap.size()).toBe(0);
  });
  test("should return false if delete() method is invoked and the element does not exist in the Map", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    expect(newMap.delete("baz")).toBe(false);
    expect(newMap.size()).toBe(1);
  });
  test("should have a clear method", () => {
    const newMap = new HashMap();
    expect(typeof newMap.clear).toBe("function");
  });
  test("should return undefined when clear() method is invoked", () => {
    const newMap = new HashMap();
    expect(newMap.clear()).toBe(undefined);
  });
  test("should remove all elements from the map when clear() method is invoked", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    newMap.set("a", "b");
    newMap.set("c", "d");
    expect(newMap.size()).toBe(3);
    newMap.clear();
    expect(newMap.size()).toBe(0);
    expect(newMap.get("foo")).toBe(undefined);
  });
  test("should return a Generator object when keys() method is invoked", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    const keys = newMap.keys();
    expect(typeof keys).toBe("object");
    expect(typeof keys.next).toBe("function");
  });
  test("should return each key name when the keys() method is invoked and each key is checked with next().value generator functions", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    newMap.set("a", "b");
    newMap.set("c", "d");
    const keys = newMap.keys();
    expect(keys.next().value).toBe("foo");
    expect(keys.next().value).toBe("a");
    expect(keys.next().value).toBe("c");
  });
  test("should return a Generator object when values() method is invoked", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    const values = newMap.values();
    expect(typeof values).toBe("object");
    expect(typeof values.next).toBe("function");
  });
  test("should return each value when the values() method is invoked and each value is checked with next().value generator functions", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    newMap.set("a", "b");
    newMap.set("c", "d");
    const values = newMap.values();
    expect(values.next().value).toBe("bar");
    expect(values.next().value).toBe("b");
    expect(values.next().value).toBe("d");
  });
  test("should return a Generator object when entries() method is invoked", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    const entries = newMap.entries();
    expect(typeof entries).toBe("object");
    expect(typeof entries.next).toBe("function");
  });
  test("should return each key & value in an Array when the entries() method is invoked and each key/value is checked with next().value generator functions", () => {
    const newMap = new HashMap();
    newMap.set("foo", "bar");
    newMap.set("a", "b");
    newMap.set("c", "d");
    const entries = newMap.entries();
    expect(entries.next().value).toEqual(["foo", "bar"]);
    expect(entries.next().value).toEqual(["a", "b"]);
    expect(entries.next().value).toEqual(["c", "d"]);
  });
});
