const quicksort = require("../algorithms/quickSort");

describe("Quick Sort Tests", () => {
  test("should return an empty array when passed an empty array", () => {
    const input = [];
    const output = quicksort(input);
    const expected = [];
    expect(output).toEqual(expected);
  });
  test("should sort only 2 digits", () => {
    const input = [2, 1];
    const output = quicksort(input);
    const expected = [1, 2];
    expect(output).toEqual(expected);
  });
  test("should sort the array when there are multiple instances of the pivot number", () => {
    const input = [2, 2, 2, 2, 1];
    const output = quicksort(input);
    const expected = [1, 2, 2, 2, 2];
    expect(output).toEqual(expected);
  });
  test("should sort a larger array", () => {
    const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const output = quicksort(input);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(output).toEqual(expected);
  });
});
