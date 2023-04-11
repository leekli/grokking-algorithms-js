function findSmallest(arr) {
  let smallest = arr[0]; // sets and stores the smallest value
  let smallest_index = 0; // sets and stores the index of the smallest value

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      // compares current index to smallest value
      smallest = arr[i]; // sets new smallest value if true
      smallest_index = i; // sets new index for new smallest value if true
    }
  }

  return smallest_index;
}

function selectionSort(arr) {
  const newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    // reduces array length in line with elements being reduced
    let smallest = findSmallest(arr); // finds smallest element in the array
    newArr.push(arr[smallest]); // adds it to the new, sorted array
    arr = arr.filter((item) => item !== arr[smallest]); // removes that item from current array
  }

  return newArr;
}

module.exports = selectionSort;
