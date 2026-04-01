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
// console.log(searchEle([1, 66, 87, 23, 65, 0, 12], 66));

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
// console.log(countNegative([1, 2, -55, 90, -6, 1, 0]));

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
// console.log(largestInArr([-1, 2, -6, -9]));

// find the second largest number in the array
function thirdLargest(arr) {
  let largest = -Infinity;
  let seclargest = -Infinity;
  let thilargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      thilargest = seclargest;
      seclargest = largest;
      largest = arr[i];
    } else if (arr[i] > seclargest && arr[i] !== largest) {
      thilargest = seclargest;
      seclargest = arr[i];
    } else if (
      arr[i] > thilargest &&
      arr[i] !== largest &&
      arr[i] !== seclargest
    ) {
      thilargest = arr[i];
    }
  }

  return thilargest;
}

// test
// console.log(thirdLargest([111, 111, 110, 110, 66, 12, 44, 83]));

// write a fn that takes n amount of number and converts it into a star pattern:

// 1)
// * * * *
// * * * *
// * * * *
// * * * *

function firstStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += " * ";
    }

    console.log(row);
  }
}

//test
// firstStarPattern(7);

// 2)
// *
// * *
// * * *
// * * * *

function secondStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += " * ";
    }

    console.log(row);
  }
}

//test
// secondStarPattern(7);

// 3)
// * * * *
// * * *
// * *
// *

function thirdStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n; j > i; j--) {
      row += " * ";
    }

    console.log(row);
  }
}

//test
thirdStarPattern(7);
