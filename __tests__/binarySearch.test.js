const binarySearch = require("../algorithms/binarySearch");

describe("binarySearch Tests", () => {
  test("should return null if passed an empty array", () => {
    expect(binarySearch([])).toBe(null);
  });
  test("should return the index number when passed an array with a single item and an item to search for which does exist", () => {
    const input = [1];
    const output = binarySearch(input, 1);
    expect(output).toBe(0);
  });
  test("should return null if passed a 3 item array and an item to search for which does not exist", () => {
    const input = [1, 2, 3];
    const output = binarySearch(input, 4);
    expect(output).toBe(null);
  });
  test("should return the index number when passed an array of multiple items and an item to search for which does exist", () => {
    const input = [1, 3, 5, 7, 9];
    const output = binarySearch(input, 3);
    expect(output).toBe(1);
  });
  test("should return the index number when passed a much bigger array of items and an item to search for which does exist", () => {
    const input = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const output = binarySearch(input, 13);
    expect(output).toBe(12);
  });
  test("should return null when passed an array of multiple items of positive numbers, and an item to search for which is a negative number", () => {
    const input = [1, 3, 5, 7, 9];
    const output = binarySearch(input, -1);
    expect(output).toBe(null);
  });
  test("should return the index number when passed an array of positive and negative numbers and an item to search for which is a negative number and does exist", () => {
    const input = [-3, -1, 0, 1, 3];
    const output = binarySearch(input, -1);
    expect(output).toBe(1);
  });
  test("should return the index number when passed an array of string characters and an item to search for which does exist", () => {
    const input = ["a", "b", "c", "d", "e"];
    const output = binarySearch(input, "c");
    expect(output).toBe(2);
  });
});
