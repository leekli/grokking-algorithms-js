function binarySearch(arr, item) {
  let low = 0,
    high = arr.length - 1; // Keep track of low and high - which part of the array we're searching in

  while (low <= high) {
    // Whilst we haven't narrowed it down to one element
    let mid = Math.ceil((low + high) / 2); // Find middle element
    let guess = arr[mid]; // Set middle element value to check with

    if (guess === item) return mid; // Found the item!

    guess > item ? (high = mid - 1) : (low = mid + 1); // Otherwise adjust the low/high tracker depending on if guess was too high or too low
  }

  return null; // This means the item does not exist!
}

module.exports = binarySearch;
