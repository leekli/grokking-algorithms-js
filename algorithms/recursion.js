function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function fibonacci(num) {
  if (num === 1) return 0;
  if (num < 4) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function deepIncludes(array, searchTerm) {
  if (array.length === 0) return false;
  if (array.includes(searchTerm)) return true;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && deepIncludes(array[i], searchTerm))
      return true;
  }

  return false;
}

module.exports = { factorial, fibonacci, deepIncludes };
