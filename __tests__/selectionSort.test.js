const selectionSort = require("../algorithms/selectionSort");

describe("selectionSort Tests", () => {
  test("should return a new array", () => {
    const input = [];
    const output = selectionSort(input);
    expect(output).not.toBe(input);
  });
  test("should return a new array when given an array with 1 item which does not require sorting", () => {
    const input = [0];
    const output = selectionSort(input);
    const expected = [0];
    expect(output).toEqual(expected);
  });
  test("should return a new array when given an array with multiple items which do not require sorting", () => {
    const input = [1, 2, 3];
    const output = selectionSort(input);
    const expected = [1, 2, 3];
    expect(output).toEqual(expected);
  });
  test("should return a new, sorted array when given an array with multiple items which do require sorting (odd length)", () => {
    const input = [10, 3, 5];
    const output = selectionSort(input);
    const expected = [3, 5, 10];
    expect(output).toEqual(expected);
  });
  test("should return a new, sorted array when given an array with multiple items which do require sorting (even length)", () => {
    const input = [10, 3, 5, 0];
    const output = selectionSort(input);
    const expected = [0, 3, 5, 10];
    expect(output).toEqual(expected);
  });
});
