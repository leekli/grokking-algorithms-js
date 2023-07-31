const {
  factorial,

  fibonacci,

  deepIncludes,
} = require("../algorithms/recursion");

describe("factorial() tests:", () => {
  test("Returns 1 if 0 or 1 input, returning base case", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });
  test("Returns 2 if input is 2", () => {
    expect(factorial(2)).toBe(2);
  });
  test("Returns the factorial of any other given number", () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });
});

describe("fibonacci() tests: ", () => {
  test("returns 0 if passed a number of 1, base case test", () => {
    expect(fibonacci(1)).toBe(0);
  });
  test("returns 1 if passed a number of 2 or 3, base case test", () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(1);
  });
  test("returns fib number for any other number of 4 or above", () => {
    expect(fibonacci(4)).toBe(2);
    expect(fibonacci(7)).toBe(8);
    expect(fibonacci(10)).toBe(34);
  });
});

describe("deepIncludes() tests:", () => {
  test("Returns false if array is empty and/or search term does not exist in empty array", () => {
    expect(deepIncludes([], "")).toBe(false);
    expect(deepIncludes([], "lee")).toBe(false);
  });
  test("Returns true when item is present in a flat 1-dimensional array", () => {
    expect(deepIncludes([1, 2, 3], 1)).toBe(true);
    expect(deepIncludes(["a", "b", "hello", 1, true], "hello")).toBe(true);
  });
  test("Returns false when item is not present in a flat 1-dimensional array", () => {
    expect(deepIncludes([1, 2, 3], "hello")).toBe(false);
    expect(deepIncludes(["a", "b", "c"], 87)).toBe(false);
  });
  test("Returns true when item is present in a nested array", () => {
    expect(deepIncludes([1, 2, [3, 4], 7], 3)).toBe(true);
    expect(
      deepIncludes(
        ["toast", ["bread"], ["avocado", ["chilli flakes", ["test"]]]],
        "avocado"
      )
    ).toBe(true);
  });
  test("Returns false when item is not present in a nested array", () => {
    expect(deepIncludes([1, 2, [3, 4], 7], "hello")).toBe(false);
    expect(
      deepIncludes(
        ["toast", ["bread"], ["avocado", ["chilli flakes", ["test"]]]],
        "not-here"
      )
    ).toBe(false);
  });
});
