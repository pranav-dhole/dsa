// write a fn that searches for an element in arr and returns the index, if the element doesnt exist the fn returns -1
function searchEle(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }

  return -1;
}

// test
console.log(searchEle([1, 66, 87, 23, 65, 0, 12], 66));

// write a fn that returns how many negative numbers are in the arr
function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

// test
console.log(countNegative([1, 2, -55, 90, -6, 1, 0]));

// write a fn that returns the largest number in the arr
function largestInArr(arr) {
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// test
console.log(largestInArr([-1, 2, -6, -9]));
