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

//moves all the zeroes to the end of array and all the non-zero number to the front with the same order as the loop will face.
function moveZeroes(arr) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x++;
    }
  }

  for (let j = x; j < arr.length; j++) {
    arr[j] = 0;
  }

  return arr;
}

// console.log(moveZeroes([0, 1, 0, 3, 12])); // returns [1,3,12,0,0]
// console.log(moveZeroes([0, 0, 0, 0, 0])); // returns [0,0,0,0,0]

//find the missing number from the max and min number from given array.
function missingNum(arr) {
  let n = arr.length;
  let totalSum = (n * (n + 1)) / 2;

  let partialSum = 0;
  for (let i = 0; i < arr.length; i++) {
    partialSum += arr[i];
  }

  return totalSum - partialSum;
}

// console.log(missingNum([1, 0, 3])); // returns 2
// console.log(missingNum([9, 3, 5, 6, 7, 1, 2, 0, 4])); // returns 8

//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// 1st approach
function singleNumber(arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (hash[arr[j]] == 1) {
      return arr[j];
    }
  }
}

//2nd approach
function singleNumber2(arr) {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor = arr[i] ^ xor;
  }

  return xor;
}

// console.log(singleNumber2([4, 1, 2, 1, 2])); // returns 4
// console.log(singleNumber([3, 1, 5, 3, 1])); // returns 5

//find the sum of numbers in an array using recursion method.
let arr = [3, 6, 2, 1, 7, 8, 0];

// 1) sum of all numbers.
function sumOfAll(n) {
  if (n == 0) return arr[n];

  return arr[n] + sumOfAll(n - 1);
}

// console.log(sumOfAll(arr.length - 1)); // returns 27

// 2) sum of all even numbers.
function sumOfAllEven(n) {
  let isEven = arr[n] % 2 == 0;
  if (n == 0) {
    return isEven ? arr[n] : 0;
  }

  return (isEven ? arr[n] : 0) + sumOfAllEven(n - 1);
}

// console.log(sumOfAllEven(arr.length - 1)); // returns 16

// 3) sum of all odd numbers.
function sumOfAllOdd(n) {
  let isOdd = arr[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }

  return (isOdd ? arr[n] : 0) + sumOfAllOdd(n - 1);
}

// console.log(sumOfAllOdd(arr.length - 1)); // returns 11

// 4) return the factorial of given number n.
function factorialOf(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return n * factorialOf(n - 1);
}

// console.log(factorialOf(5)); // returns 120
// console.log(factorialOf(0)); // returns 0

// finds the fibonacci of given number n. (recursive & for loop method)
// 1) recursive method.
function findFibo(n) {
  if (n <= 1) return n;
  return findFibo(n - 1) + findFibo(n - 2);
}

// console.log(findFibo(8)); // returns 21

// 2) for loop method.
function findFibo2(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  let returnVal = 0;
  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    returnVal = prev + curr;
    prev = curr;
    curr = returnVal;
  }

  return returnVal;
}

// console.log(findFibo2(6)); //returns 8

// sort the given array using bubble sort algorithm.
function sortArr(arr) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    let swapped = false;

    for (let i = 0; i <= arr.length - 1; i++) {
      count++;

      let temp = arr[i];
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

// console.log(sortArr([42, 7, 89, 12, 55, 23, 1, 67, 34, 90, 15, 3])); // returns [1,  3,  7, 12, 15, 23, 34, 42, 55, 67,89, 90]

// sort the given array using selection sort algorithm.
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

// console.log(selectionSort([5, 6, 7, 8, 3, 4, 1, 0, -10])); //returns [-10,0,1,3,4,5,6,7,8]

//sort the given array using insertion sort algorithm.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = curr;
  }
  return arr;
}

// console.log(insertionSort([14, 3, 11, 7, 1, 9, 12, 5, 8, 2, 13, 4, 10, 6, 0])); //returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

//sort the given array using merge sort algorithm.
function merge(left, right) {
  let leftCopy = [...left];
  let leng = left.length + right.length;
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < leng; i++) {
    if (p2 >= right.length || (p1 < left.length && leftCopy[p1] < right[p2])) {
      left[i] = leftCopy[p1];
      p1++;
    } else {
      left[i] = right[p2];
      p2++;
    }
  }

  return left;
}

// this uses the above merge function in its returned function.
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// console.log(mergeSort([1, 4, 7, 8, 2, 3, 5]));

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    // now after all this looping when curr becomes null this loops stops.
    let temp = curr.next; // 2->3->4->5->null
    curr.next = prev; // 1->null, 2->1, 3->2, 4->3, 5->4
    prev = curr; // null->1, 1->2, 2->3, 3->4, 4->5
    curr = temp; // 1->2, 2->3, 3->4, 4->5, 5->null
  }

  return prev; // you can also assign head = prev, and return head.
}

// if 1->2->3->4->5->null lined list given it returns 5->4->3->2->1->null

// return true if given LL follows cycle otherwise return false.
// 1st approach
function hasCycle(head) {
  let mySet = new Set();
  let curr = head;

  while (curr) {
    if (mySet.has(curr)) {
      return true;
    } else {
      mySet.add(curr);
      curr.next;
    }
  }

  return false;
}

// 2nd approach
function hasCycle2(head) {
  if (head === null) return false;

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

// 3rd approach
function hasCycle2(head) {
  if (head === null) return false;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

// if 1->2->3->4->5->1(suppose this is the first head node of LL) list given, it returns true. if 1->2->3->4->5->null list given it returns false

function getIntersectionNode(headA, headB) {
  let mySet = new Set();

  while (headB) {
    mySet.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (mySet.has(headA)) return headA;
    headA = headA.next;
  }

  return null;
}

// if 1->2->3->4->5->null
// 3->5->2-> suppose its intersecting at headA's 3 node , so the answer it returns is 3.

//2nd approach of brute forch
function getIntersectionNode(headA, headB) {
  let b = headB;

  while (headA) {
    if (headA === headB) return headA;

    headB = headB.next;

    if (headB === null) {
      headA = headA.next;
      headB = b;
    }
  }

  return null;
}

// this approach works for small LL's but not for very long ones, there it exceeds the time limit.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 1st approach
function removeNthFromEnd(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let length = 0;

  while (head) {
    head = head.next;
    length++;
  }

  let prevPos = length - n;
  let prev = sentinel;

  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return sentinel.next;
}

//2nd approach
function removeNthFromEnd2(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let p1 = sentinel;
  for (let i = 0; i < n; i++) {
    p1 = p1.next;
  }

  let p2 = sentinel;

  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }

  p2.next = p2.next.next;

  return sentinel.next;
}

// create a function that returns a LL with no duplicates.
function deleteDuplicates(head) {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

// if given LL is  [1,1,2,3,3] it will return [1,2,3] LL

// create a function that returns a LL with odd indexed nodes coming at first then followed by even indexed nodes, keep in mind the order of nodes shouldnt change.
function oddEvenList(head) {
  let odd = head;
  let even = head.next;
  let evenCopy = even;

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenCopy;

  return head;
}

// if given LL is [1,2,4,6,8,4,5] it will return [1,4,8,5,2,6,4] LL
