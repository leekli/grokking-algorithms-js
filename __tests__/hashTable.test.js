const hashTable = require("../algorithms/hashTable");

describe("Hash Table / Map Tests", () => {
  test("should return the value of a key which exists in the Map", () => {
    const output = hashTable();
    expect(output.get("a")).toBe(1);
  });
  test("should add a key/value pair which does not exist into the Map", () => {
    const key = "apple";
    const value = "£2.99";
    const output = hashTable(key, value);
    expect(output.get(key)).toBe(value);
  });
  test("should clear the Map using the .clear method", () => {
    const key = "apple";
    const value = "£2.99";
    const output = hashTable(key, value);
    output.clear();
    expect(output.get(key)).toBe(undefined);
  });
  test("should delete the key 'a' from the Map using the .delete method", () => {
    const output = hashTable();
    output.delete("a");
    expect(output.get("a")).toBe(undefined);
  });
});
