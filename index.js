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

// 4)
//     *
//    **
//   ***
//  ****
// *****

function fourthStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - (i + 1); j++) {
      row += "  ";
    }

    for (let k = 0; k < i + 1; k++) {
      row += "* ";
    }

    console.log(row);
  }
}

//test
// fourthStarPattern(5);

// 5)
// 12345
// 1234
// 123
// 12
// 1

function numberPatternOne(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += ` ${j + 1} `;
    }

    console.log(row);
  }
}

//test
// numberPatternOne(7);

// 6)
// 10101
// 1010
// 101
// 10
// 1

function numberPatternTwo(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let num = 1;

    for (let j = 0; j < n - i; j++) {
      row += ` ${num} `;

      if (num === 1) {
        num = 0;
      } else {
        num = 1;
      }
    }

    console.log(row);
  }
}

//test
// numberPatternTwo(7);

// 7)
// 10101
// 0101
// 010
// 10
// 1

function numberPatternThree(n) {
  let num = 1;
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - i; j++) {
      row += ` ${num} `;

      if (num === 1) {
        num = 0;
      } else {
        num = 1;
      }
    }

    console.log(row);
  }
}

//test
// numberPatternThree(7);

// --------------------
// return the count of numbers present in the number
// for ex : number = 3357, should return 4

function calculateNumber(number) {
  if (number === 0) {
    return 1;
  }

  number = Math.abs(number);
  let count = 0;

  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }

  return count;
}

// console.log(calculateNumber(-1034)); //logs 4
// console.log(calculateNumber(0)); //logs 1
// console.log(calculateNumber(24063)); //logs 5

// palindrome question
function findIsPalindrome(num) {
  let numCopy = num;
  let reverse = 0;

  while (num > 0) {
    let remainder = num % 10;
    reverse = 10 * reverse + remainder;
    console.log(reverse);
    num = Math.floor(num / 10);
  }

  return reverse === numCopy;
}

// console.log(findIsPalindrome(-121)); // returns false
// console.log(findIsPalindrome(121)); // returns true

//reverse the number without changing its + - signs & it should also be in the -2**31 and 2**31 -1 range only if not return 0
function reverseDigit(num) {
  let numCopy = num;
  let reverse = 0;

  num = Math.abs(num);
  while (num > 0) {
    let remainder = num % 10;
    reverse = 10 * reverse + remainder;
    num = Math.floor(num / 10);
  }

  let limit = Math.pow(2, 31);
  if (reverse < -limit || reverse > limit) {
    return 0;
  }

  return numCopy < 0 ? -reverse : reverse;
}

//test
// console.log(reverseDigit(-3895)); // logs -5983
// console.log(reverseDigit(1233)); // logs 3321
// console.log(reverseDigit(1200000648)); // logs 0

// leetcode : 27. Remove Element
function removeElement(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x++;
    }
  }

  return x;
}

// console.log(removeElement([1, 2, 3, 4, 4, 5, 4], 4));
// console.log(removeElement([-1, 2, 3, -1, 4, 6, 7, -1], -1));

// leetcode :344. Reverse String
function reverseString(str) {
  for (let i = 0; i < str.length / 2; i++) {
    let temp = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = temp;
  }

  return str;
}

// console.log(reverseString(["m", "a", "h", "a", "n"]));
// console.log(reverseString(["h", "e", "l", "l", "o"]));

// leetcode : 121. best time to buy and sell a stock.
function maxProfit(prices) {
  let min = prices[0];
  let max = 0;

  // starting i from 1 instead of 0 cause we cant buy and sell on  same day, so no point to iterating for 0th index.
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }

    if (prices[i] < min) {
      min = prices[i];
    }
  }

  return max;
}

// console.log(maxProfit([2, 5, 4, 1, 3, 2])); // returns 3 as expected, buying on 1st day and selling on 2nd day makes the maximum profit.
// console.log(maxProfit([10, 8, 6, 4, 2, 1])); // returns 0 as expected, the prices are decreasing as the days are increasing so there is no room for any profit.
