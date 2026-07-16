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

//swapPairs => returns the LL with swapped pairs second node of pair coming at first and first one going at second place.
// 1st approach
function swapPairs(head) {
  //if head is empty or only contains one node just return it from here
  if (!head || !head.next) return head;

  //suppose i am creating a sentinel node below.
  let dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;
  let curr = head;
  let next = head.next;

  while (curr & next) {
    //referencing pointers
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    //moving pointers forward
    prev = curr;
    curr = prev.next;
    next = curr & curr.next;
  }

  //return dummy.next cause that what is pointing towards our head
  return dummy.next;
}

// if given LL is [1,2,3,4] it should return [2,1,4,3]

//2nd approach (recursive method)
function swapPairs2(head) {
  //writting base condition for when the head is null.
  if (!head || !head.next) return head;

  let left = head;
  let right = head.next;

  //below is the recursive case which will till it doesn't hit base case.
  left.next = swapPairs2(right.next);
  right.next = left;

  return right;
}

// if given LL is [1,2,3,4] it should return [2,1,4,3]

// 1st step => swapPairs2([1,2,3,4]) will be called which will go till left.next line where it will call again itself with right.next part of LL
// 2nd step => swapPairs2([3,4]) will be called which again will go till left.next line where it will call again itself with right.next.
// 3rd step => swapPairs2([null]) will be called which will immediately return head i.e null in this case.
// 4th step => 2nd step swap call will get the left.next value as [4,3,null].
// 5th step => 1st step call will get its left.next value as [1,4,3,null].
// 6th step => finally we will return out right node from the 1st step call which will be [2,1,4,3,null].

// write a function that returns length of last word of given string.
// 1st approach
function lengthOfLastWord(s) {
  let length = 0;

  let myArr = s.split(" ").filter((word) => word.length > 0);
  length = myArr[myArr.length - 1].length;

  return length;
}

// console.log(lengthOfLastWord(" Hello World  ")); // returns 5

//2nd appraoch
function lengthOfLastWord2(s) {
  let length = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      length++;
    } else if (length > 0) {
      break;
    }
  }

  return length;
}

// console.log(lengthOfLastWord2(" i am   here for a    selfie    "));

//write a function that returns index of a word which contains given string x.
function findWordsContaining(words, x) {
  let myArr = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        myArr.push(i);
        break;
      }
    }
  }

  return myArr;
}

// console.log(findWordsContaining(["abc", "bcd", "aaa", "cbc"], "b")); //returns [0,1,3]

// jewels & stones #771th leetcode question
// first approach with time complexity of O(jewels * stones) and space complexity of O(1)
function numJewelsInStones(jewels, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) count++;
    }
  }

  return count;
}

// console.log(numJewelsInStones("aA", "aAAbbb")); // returns 3

// second approach with time complexity of O(jewels + stones) and space complexity of O(1) * n;
function numJewelsInStones2(jewels, stones) {
  let count = 0;
  let mySet = new Set();

  for (let i = 0; i < jewels.length; i++) {
    mySet.add(jewels[i]);
  }

  for (let j = 0; j < stones.length; j++) {
    if (mySet.has(stones[j])) count++;
  }

  return count;
}

// console.log(numJewelsInStones2("az", "ssaeprzZ")); //returns 2
// console.log(numJewelsInStones2("q", "ssaeprzZ")); //returns 0

//3541.Find Most Frequent Vowel and Consonant leetcode question
function maxFreqSum(s) {
  let vowelsObj = { a: 0, e: 0, o: 0, u: 0, i: 0 };
  let consonentObj = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in vowelsObj) {
      vowelsObj[s[i]] += 1;
    } else {
      if (!(s[i] in consonentObj)) {
        consonentObj[s[i]] = 1;
      } else {
        consonentObj[s[i]] += 1;
      }
    }
  }

  let maxVowelFreq = 0;
  for (const key in vowelsObj) {
    if (vowelsObj[key] > maxVowelFreq) maxVowelFreq = vowelsObj[key];
  }

  let maxConsonentFreq = 0;
  for (const key in consonentObj) {
    if (consonentObj[key] > maxConsonentFreq)
      maxConsonentFreq = consonentObj[key];
  }

  return maxVowelFreq + maxConsonentFreq;
}

// console.log(maxFreqSum("successes")); //returns 6, with maxVowelFreq being 2 and maxConsonentFreq being 4.
// console.log(maxFreqSum("aeiaeia")); //returns 3, with maxVowelFreq being 3 and maxConsonentFreq being 0.

//1221. Split a String in Balanced Strings leetcode question
// 1st approach
function balancedStringSplit(s) {
  let R = 0;
  let L = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") ++R;
    if (s[i] === "L") ++L;

    if (R === L) ++count;
  }

  return count;
}

// 2nd approach
function balancedStringSplit2(s) {
  let temp = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") ++temp;
    if (s[i] === "L") --temp;

    if (temp === 0) ++count;
  }

  return count;
}

// console.log(balancedStringSplit2("RLRRLLRLRL")); // returns 4
// console.log(balancedStringSplit2("RLRRRLLRLL")); // returns 2
// console.log(balancedStringSplit2("LLLLRRRR")); // returns 1

function reverseStr(s, k) {
  s = s.split("");

  for (let i = 0; i < s.length; i += +2 * k) {
    for (let j = 0; j < Math.floor(k / 2); j++) {
      let temp = s[i + j]; // s[i + 0] is e
      s[i + j] = s[i + k - j - 1];
      s[i + k - j - 1] = temp;
    }
  }

  return s.join("");
}

// console.log(reverseStr("abcdef", 3)); // returns "bacdfeg"

// write a function if a given random string containing non-alphanumeric values as well as alphanumeric ones return true if the string of only alphanumeric is palindrome or not
function isPalindrome(s) {
  s = s.toLowerCase();

  let p1 = 0;
  let p2 = s.length - 1;

  for (let i = 0; i < s.length; i++) {
    if (p2 < p1) break;

    if (s[p1].match(/[a-z0-9]/) && s[p2].match(/[a-z0-9]/)) {
      if (s[p1] !== s[p2]) return false;
      p1++;
      p2--;
    } else {
      if (!s[p1].match(/[a-z0-9]/)) {
        p1++;
      } else {
        p2--;
      }
    }
  }

  return true;
}

// console.log(isPalindrome("No 'x' in Nixon")); //returns true
// console.log(isPalindrome("I am here, but not There!.")); //returns false

// write a function that returns highest odd number a string contains else return empty string.
// 1st way of code
function largestOddNumber(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 === 1) {
      return num.slice(0, i + 1);
    }
  }

  return "";
}

// console.log(largestOddNumber("35456")); // return 3545

// 2nd way of code
function largestOddNumber2(num) {
  let n = num.length - 1;

  while (n >= 0) {
    if (parseInt(num[n]) % 2 === 1) return num.slice(0, n + 1);
    --n;
  }

  return "";
}

// console.log(largestOddNumber2("4046")); // return "" (empty string)
// console.log(largestOddNumber2("45568")); // return 455

// write a function that returns the largest common prefix out of all provided array of strings.
function longestCommonPrefix(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      if (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix === "") return "";
      }
    }
  }

  return prefix;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // returns "fl"
// console.log(longestCommonPrefix(["flower", "low", "flght"])); // returns ""

// write a function that returns true or false if the given s string is anagram of t string.
// 1st and most efficient way of writing code
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let myObj = {};

  for (let i = 0; i < s.length; i++) {
    myObj[s[i]] = (myObj[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (myObj[t[i]]) {
      if (myObj[t[i]] > 0) {
        myObj[t[i]] -= 1;
      }
    } else {
      return false;
    }
  }

  for (let key in myObj) {
    if (myObj[key] > 0 || myObj[key] < 0) return false;
  }

  return true;
}

// 2nd way of writing same code but this one is not efficient one cause it uses so much space
function isAnagram2(s, t) {
  let sCopy = s.split("").sort().join("");
  let tCopy = t.split("").sort().join("");

  return sCopy === tCopy;
}

// console.log(isAnagram("anagram", "naamgra")); // retursn true
// console.log(isAnagram("rat", "car")); // retursn false
// console.log(isAnagram("rat", "card")); // retursn false

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let mapStoT = {};
  let mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
      return false;
    }
  }

  return true;
}

// console.log(isIsomorphic("add", "egg")); // returns true
// console.log(isIsomorphic("foo", "bar")); // returns false
// console.log(isIsomorphic("far", "boo")); // returns false

// write a function that returns grouped anagrams in any order.
// 1st way to code
function groupAnagrams(strs) {
  let map = {};
  let myArr = [];

  for (let i = 0; i < strs.length; i++) {
    myArr.push(strs[i].split("").sort().join(""));
  }

  for (let i = 0; i < myArr.length; i++) {
    if (!map[myArr[i]]) {
      map[myArr[i]] = [strs[i]];
    } else {
      map[myArr[i]].push(strs[i]);
    }
  }

  myArr = [];
  for (let key in map) {
    myArr.push(map[key]);
  }

  return myArr;
}

// 2nd way to write code
function groupAnagrams2(strs) {
  let map = {};

  for (let s of strs) {
    let sorted = s.split("").sort().join("");

    if (!map[sorted]) {
      map[sorted] = [];
    }

    map[sorted].push(s);
  }

  return Object.values(map);
}

//2nd approach
function groupAnagrams3(strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let freqArr = Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      let index = strs[i][j].charCodeAt() - "a".charCodeAt();
      ++freqArr[index];
    }

    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + "#" + freqArr[k];
    }

    console.log(`${strs[i]}'s key : ${key}`);

    if (!map[key]) {
      map[key] = [strs[i]];
    } else {
      map[key].push(strs[i]);
    }

    console.log(map);
    console.log(
      "---------------------------------------------------------------",
    );
  }

  return Object.values(map);
}

// console.log(groupAnagrams3(["eat", "tea", "tan", "ate", "nat", "bat"])); // returns [["bat"],["nat","tan"],["ate","eat","tea"]].
// console.log(groupAnagrams([""])); // returns [[""]].
// console.log(groupAnagrams2(["a"])); // returns [["a"]].

// #225th. ImplementStack using queues
// 1st approach using two queues
var MyStack = function () {
  this.q1 = []; // main queue
  this.q2 = []; // helper queue
};

MyStack.prototype.push = function (x) {
  // pushing the given element in main queue
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q1.length;

  // if q1 = [1,2,3] then q2 will become [1,2].
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  //q1 =[3]
  let front = this.q1.shift();

  // exchange values of q1 and q2 because here the q1 is empty and q2 is [1,2]
  let temp = this.q1; // []
  this.q1 = this.q2; // [] => [1,2]
  this.q2 = temp; // [1,2] => []

  return front; // returning last remaining element from q1
};

MyStack.prototype.top = function () {
  // return the top element from main queue
  let n = this.q1.length;

  // this will firstly transport all q1 elements to q2 until the last(top) element remains in it
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  let front = this.q1.shift(); // this is our top element

  // inserting the top element in q1 because we didnt push it in q2 in above loop
  this.q2.push(front);

  // now swap the q1 with q1 and vice versa.
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return front; // returning the top element successfully
};

MyStack.prototype.empty = function () {
  // return true if main queue is empty else false
  return this.q1.length === 0; //if length is 0 return true else false, i.e (>0 length).
};

// 2nd approach with one queue
var MyStack2 = function () {
  this.q = [];
};

MyStack2.prototype.push = function (x) {
  this.q.push(x);
};

MyStack2.prototype.pop = function () {
  let n = this.q.length;

  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }

  return this.q.shift();
};

MyStack2.prototype.top = function () {
  let n = this.q.length;

  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }

  let front = this.q.shift();
  this.q.push(front);

  return front;
};

MyStack2.prototype.empty = function () {
  return this.q.length === 0;
};

// write a function that implements a queue using two stacks
var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

// write a function that returns true if given string is a valid parentheses. #20th leetcode question.
// 1st way to write the code
function isValid(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (
        !top ||
        (top === "[" && s[i] !== "]") ||
        (top === "(" && s[i] !== ")") ||
        (top === "{" && s[i] !== "}")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// 2nd way to write a code
function isValid2(s) {
  let stack = [];

  let map = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (!top || s[i] !== map[top]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(isValid("()")); // returns true
// console.log(isValid(")(){}")); // returns false
// console.log(isValid2("()[]{}")); // returns true
// console.log(isValid2("()}")); // returns false

// design a stack which uses only O(1) time complexity to perform certain stack functions.

var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push([val, val]);
  } else {
    let lastMinVal = this.stack[this.stack.length - 1][1];
    let minVal = Math.min(val, lastMinVal);
    this.stack.push([val, minVal]);
  }
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1][1];
};

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// write a function that returns a string by removing its outermost valid parentheses brackets.
// 1st approach using stack
function removeOuterParentheses(s) {
  let stack = [];
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        ans += s[i];
      }
    } else {
      if (stack.length > 1) {
        ans += s[i];
      }
      stack.pop();
    }
  }

  return ans;
}

// 2nd approach using count variable
function removeOuterParentheses2(s) {
  let ans = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      ++count;
      if (count > 1) {
        ans += s[i];
      }
    } else {
      if (count > 1) {
        ans += s[i];
      }
      --count;
    }
  }

  return ans;
}

// console.log(removeOuterParentheses("(()())(())(()(()))")); //()()()()(())
// console.log(removeOuterParentheses2("(()())(())")); // ()()()

// write a function that returns a final calcualted integer from a tokens list in order of reverse polish notation.
function evalRPN(tokens) {
  let stack = [];
  let a;
  let b;

  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] === "+" ||
      tokens[i] === "-" ||
      tokens[i] === "*" ||
      tokens[i] === "/"
    ) {
      b = stack.pop();
      a = stack.pop();
    }

    if (tokens[i] === "+") {
      stack.push(Math.trunc(a + b));
    } else if (tokens[i] === "-") {
      stack.push(Math.trunc(a - b));
    } else if (tokens[i] === "*") {
      stack.push(Math.trunc(a * b));
    } else if (tokens[i] === "/") {
      stack.push(Math.trunc(a / b));
    } else {
      stack.push(Number(tokens[i]));
    }
  }

  return stack.pop();
}

// console.log(evalRPN(["2", "1", "+", "3", "*"])); // returns 9
// console.log(evalRPN(["4", "13", "5", "/", "+"])); // returns 6
// console.log(
//   evalRPN([
//     "10",
//     "6",
//     "9",
//     "3",
//     "+",
//     "-11",
//     "*",
//     "/",
//     "*",
//     "17",
//     "+",
//     "5",
//     "+",
//   ]),
// ); // returns 22

// write a function that return an array ans such that ans[i] is the number of days you have to wait after the ith day to get a warmer temperature.
function dailyTemperatures(temp) {
  let stack = [];
  let ans = new Array(temp.length).fill(0);
  stack.push(temp.length - 1);

  for (let i = temp.length - 2; i >= 0; i--) {
    while (stack.length) {
      let top = temp[stack[stack.length - 1]];
      if (temp[i] >= top) {
        stack.pop();
      } else {
        ans[i] = stack[stack.length - 1] - i;
        break;
      }
    }

    stack.push(i);
  }

  return ans;
}

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // returns [1,1,4,2,1,1,0,0]
// console.log(dailyTemperatures([30, 40, 50, 60])); //returns [1,1,1,0]

// write a function that returns an array of length num1.length such that arr[i] is the next greater element as described above.
var nextGreaterElement = function (num1, num2) {
  let ngeMap = {};
  let stack = [];
  let n = num2.length;
  stack.push(num2[num2.length - 1]);
  ngeMap[num2[num2.length - 1]] = -1;

  for (let i = num2.length - 2; i >= 0; i--) {
    while (stack.length) {
      if (num2[i] > stack[stack.length - 1]) {
        stack.pop();
      } else {
        ngeMap[num2[i]] = stack[stack.length - 1];
        break;
      }
    }

    if (stack.length === 0) {
      ngeMap[num2[i]] = -1;
    }

    stack.push(num2[i]);
  }

  return num1.map((x) => ngeMap[x]);
};

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // returns [-1,3,-1]

// write a function that return the next greater number for every element in nums.
// 1st way to write code
function nextGreaterElement2(nums) {
  let stack = [];
  let arr = [...nums, ...nums];
  let ans = Array(nums.length).fill(-1);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length) {
      if (arr[i] < stack[stack.length - 1]) {
        ans[i] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }

    stack.push(arr[i]);
  }

  return ans.slice(0, nums.length);
}

// 2nd way to write code
function nextGreaterElement2Modified(nums) {
  let stack = [];
  let ans = Array(nums.length).fill(-1);
  let n = nums.length;

  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length) {
      if (nums[i % n] < stack[stack.length - 1]) {
        ans[i % n] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }

    stack.push(nums[i % n]);
  }

  return ans;
}

// console.log(nextGreaterElement2([1, 2, 1])); // returns [2,-1,2]
// console.log(nextGreaterElement2([1, 2, 3, 4, 3])); // returns [2,3,4,-1,4]
// console.log(nextGreaterElement2Modified([1, 2, 3, 4, 3])); // returns [2,3,4,-1,4]

function maxMin(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let queue = [];
  let maxMinutes = 0;

  // push all the places of index in queue where rotten oranges are present
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  // find all the fresh oranges in adjacent directions of rotten oranges and make them rotten too. calculate no of minutes to rot all oranges.
  while (queue.length) {
    const [x, y, lvl] = queue.shift();

    if (x > 0 && grid[x - 1][y] === 1) {
      // left
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, lvl + 1]);
    }
    if (x < rows - 1 && grid[x + 1][y] === 1) {
      // right
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, lvl + 1]);
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      // top
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, lvl + 1]);
    }
    if (y < cols - 1 && grid[x][y + 1] === 1) {
      // bottom
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, lvl + 1]);
    }

    maxMinutes = Math.max(lvl, maxMinutes);
  }

  // find if there are any fresh oranges are left if there are any return -1 instantly
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  // if code comes till this line that means we were successful in rotting all the oranges whichi were fresh, so return in how many minutes we were able to rot them all.
  return maxMinutes;
}

// console.log(
//   maxMin([
//     [2, 1, 1],
//     [0, 1, 1],
//     [2, 1, 0],
//   ]),
// ); // returns 4

// console.log(
//   maxMin([
//     [2, 1, 1],
//     [1, 1, 0],
//     [0, 1, 1],
//   ]),
// ); // returns 4

// console.log(
//   maxMin([
//     [2, 1, 0],
//     [1, 0, 0],
//     [0, 1, 0],
//   ]),
// ); // return -1

// write a function that returns the index of target if it is in nums, or -1 if it is not in nums. #33th leetcode question
function binSearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (target === nums[m]) {
      return m;
    }

    // if left side sorted
    if (nums[m] >= nums[l]) {
      if (target < nums[m] && target >= nums[l]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      // if right side sorted
      if (target > nums[m] && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
}

// console.log(binSearch([4, 5, 6, 7, 0, 1, 2], 0)); // returns 4
// console.log(binSearch([1], 0)); // returns -1
// console.log(binSearch([3, 1], 1)); // returns 1

// write a function that returns the square root of given number in log n time complexity.
function mySqrt(x) {
  if (x < 2) return x;
  let l = 2;
  let r = Math.floor(x / 2);

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (x === m ** 2) {
      return m;
    } else if (x < m ** 2) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return r;
}

// console.log(mySqrt(4)); // returns 2
// console.log(mySqrt(9)); // returns 3
// console.log(mySqrt(19)); // returns 4

function findPeakElement(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    if (nums[m] < nums[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
}

// console.log(findPeakElement([1, 2, 3, 1])); //returns 2
// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); //returns 5

// write a function that returns the minimum value in an rotated sorted array
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (nums[right] < nums[middle]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return nums[left];
}

// console.log(findMin([3, 4, 5, 1, 2])); // returns 1
// console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // returns 0
// console.log(findMin([11, 13, 15, 17])); // returns 11

// write a function that returns the peak element from an array using logn time complexity.
function peakIndexInMountainArray(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] < arr[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
}

// console.log(peakIndexInMountainArray([0, 10, 5, 2])); // returns 1
// console.log(peakIndexInMountainArray([0, 1, 0])); // returns 1
// console.log(peakIndexInMountainArray([0, 2, 1, 0])); // returns 2

// write a function that returns the single element that appears only once.
function singleNonDuplicate(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    // left side pair
    if (nums[m] == nums[m - 1]) {
      // left side odd
      if ((m - 1 - l) % 2 === 1) {
        r = m - 2;
      } else {
        // right side odd
        l = m + 1;
      }
    } else if (nums[m] == nums[m + 1]) {
      // right side pair
      // right side odd
      if ((m - l) % 2 === 1) {
        r = m - 1;
      } else {
        l = m + 2;
      }
    } else {
      return nums[m];
    }
  }
}

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // returns 2
// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])); // returns 10

// write a function that Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.
function findClosestElements(arr, k, x) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    if (arr[m + k] - x < x - arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return arr.slice(l, l + k);
}

// console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // returns [1,2,3,4]
// console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1)); // returns [1,1,2,3]

//write a function that returns the index of the given needle presence in haystack else return -1, using KMP algorithm.
function strStr(haystack, needle) {
  let hay = haystack.length;
  let nee = needle.length;
  let lap = [0];

  let i = 0;
  let j = 1;
  while (j < nee) {
    if (needle[j] === needle[i]) {
      lap[j] = i + 1;
      ++j;
      ++i;
    } else {
      if (i === 0) {
        lap[j] = 0;
        ++j;
      } else {
        i = lap[i - 1];
      }
    }
  }

  i = j = 0;
  while (i < hay) {
    if (haystack[i] === needle[j]) {
      ++i;
      ++j;
    } else {
      if (j === 0) {
        ++i;
      } else {
        j = lap[j - 1];
      }
    }

    if (j === nee) {
      return i - nee;
    }
  }

  return -1;
}

// console.log(strStr("sadbutsad", "sad")); // returns 0
// console.log(strStr("onionionsmike", "onions")); // returns 3
// console.log(strStr("leetcode", "leetu")); // returns -1

// write a function that returns the maximum amount of water a container can store.
function maxArea(height) {
  let max = -Infinity;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    let sum = Math.min(height[i], height[j]) * (j - i);
    if (sum > max) max = sum;
    if (height[i] < height[j]) {
      ++i;
    } else {
      --j;
    }
  }

  return max;
}

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // returns 49
// console.log(maxArea([1, 1])); // returns 1

// write a function that given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
function trap(height) {
  let maxL = [];
  maxL[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    maxL[i] = Math.max(height[i], maxL[i - 1]);
  }

  let maxR = [];
  maxR[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    maxR[i] = Math.max(height[i], maxR[i + 1]);
  }

  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    ans = ans + (Math.min(maxR[i], maxL[i]) - height[i]);
  }

  return ans;
}

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // returns 6
// console.log(trap([4, 2, 0, 3, 2, 5])); // returns 9

// write a function that returns the length of the longest substring containing the same letter you can get after performing the above operations.
function characterReplacement(s, k) {
  let i = 0;
  let j = 0;
  let maxLen = 0;
  let map = Array(26).fill(0);
  map[s.charCodeAt(0) - 65] = 1;

  while (j < s.length) {
    if (isWindowValid(map, k)) {
      maxLen = Math.max(maxLen, j - i + 1);
      ++j;
      ++map[s.charCodeAt(j) - 65];
    } else {
      --map[s.charCodeAt(i) - 65];
      ++i;
    }
  }

  return maxLen;
}
function isWindowValid(map, k) {
  let totalCount = 0;
  let maxCount = 0;

  for (let i = 0; i < 26; i++) {
    totalCount = totalCount + map[i];
    maxCount = Math.max(maxCount, map[i]);
  }

  return totalCount - maxCount <= k;
}

// console.log(characterReplacement("ABAB", 2)); // returns 4
// console.log(characterReplacement("AABABBA", 1)); // returns 4

// write a function that returns true if one of s1's permutations is the substring of s2.
function checkInclusion(s1, s2) {
  let hashP = Array(26).fill(0);
  let hashW = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    ++hashP[s1.charCodeAt(i) - 97];
    ++hashW[s2.charCodeAt(i) - 97];
  }

  let i = 0;
  let j = s1.length - 1;
  while (j < s2.length) {
    if (isEqual(hashP, hashW)) {
      return true;
    } else {
      --hashW[s2.charCodeAt(i) - 97];
      ++i;
      ++j;
      ++hashW[s2.charCodeAt(j) - 97];
    }
  }

  return false;
}
function isEqual(hashP, hashW) {
  return hashW.every((val, idx) => val === hashP[idx]);
}

// console.log(checkInclusion("ab", "eidbaooo"));
// console.log(checkInclusion("ab", "eidboaoo"));

// write a function that given the root of a binary tree, return the preorder traversal of its nodes' values.
function preorderTraversel(root) {
  let ans = [];

  function preTraversel(curr) {
    if (!curr) return;
    ans.push(curr.val);
    preTraversel(curr.left);
    preTraversel(curr.right);
  }
  preTraversel(root);
  return ans;
}
//if given [1,null,2,3] returns [1,2,3].
//if given [1,2,3,4,5,null,8,null,null,6,7,9] returns [1,2,4,5,6,7,3,8,9].

// with iterative approach
function preorderTraversel2(root) {
  if (!root) return [];
  let ans = [];
  let stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    ans.push(curr.val);
    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  }
  return ans;
}

// write a inorder traversel in iterative approach. left-root-right
function inorderTraversel(root) {
  let ans = [];
  let stack = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }
}

// if given [1,null,2,3] it returns [1,3,2].
// if given [1,2,3,4,5,null,8,null,null,6,7,9] it returns [4,2,6,5,7,1,3,9,8].

// write a function that returns postorder traversel of binary tree using iterative approach. left-right-root
// using two stacks
function postorderTraversel(root) {
  if (!root) return [];
  let s1 = [root];
  let s2 = [];
  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr);
    curr.left && s1.push(curr.left);
    curr.right && s1.push(curr.right);
  }

  let ans = [];
  while (s2.length) {
    ans.push(s2.pop().val);
  }
  return ans;
}

// using one stack
function postorderTraversal2(root) {
  let ans = [];
  let stack = [];
  let curr = root;
  let lastVisited = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    let topOfStack = stack[stack.length - 1];
    if (topOfStack.right && topOfStack.right !== lastVisited) {
      curr = topOfStack.right;
    } else {
      ans.push(topOfStack.val);
      lastVisited = stack.pop();
    }
  }
  return ans;
}

// if given [1,null,2,3] it returns [3,2,1].
// if given [1,2,3,4,5,null,8,null,null,6,7,9] it returns [4,6,7,5,2,9,8,3,1].

// recursive approach # 101th leetcode question.
function isSymmetric(root) {
  function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      isMirror(left.right, right.left) &&
      isMirror(left.left, right.right)
    );
  }
  return isMirror(root.left, root.right);
}

// iterative approach
function isSymmetric2(root) {
  let queue = [root.left, root.right];

  while (queue.length) {
    let p1 = queue.shift();
    let p2 = queue.shift();

    if (!p1 && !p2) continue;
    if (!p1 || !p2) return false;
    if (p1.val !== p2.val) return false;

    queue.push(p1.left, p2.right);
    queue.push(p1.right, p2.left);
  }

  return true;
}

// if given [1,2,2,3,4,4,3] it returns true.
// if given [1,2,2,null,3,null,3] it returns false.

// Given the roots of two binary trees p and q, write a function to check if they are the same or not. #100th leetcode question.
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    isSameTree(p.left, q.right) &&
    isSameTree(p.right, q.left)
  );
}

// if given p=[1,2,3] , q=[1,2,3] it returns true.
// if given p=[1,2] , q=[1,null,2] it returns false.

// Given a binary tree, determine if it is height-balanced. #110th leetcode question.
function isBalanced(root) {
  let ans = true;

  function calHeight(curr) {
    if (!curr) return 0;

    let leftSide = calHeight(curr.left);
    let rightSide = calHeight(curr.right);

    if (Math.abs(leftSide - rightSide) > 1) {
      ans = false;
    }

    return 1 + Math.max(leftSide, rightSide);
  }

  calHeight(root);
  return ans;
}

// if given [3,9,20,null,null,15,7] it returns true.
// if given [1,2,2,3,3,null,null,4,4] it returns false.

// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// iterative way
function zigzagLevelOrder(root) {
  if (!root) [];
  let ans = [];
  let q = [root];
  let level = 0;

  while (q.length) {
    let levelArr = [];
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();

      if (level % 2 === 0) {
        levelArr.push(curr.val);
      } else {
        levelArr.unshift(curr.val);
      }

      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }

    level++;
    ans.push(levelArr);
    levelArr = [];
  }

  return ans;
}

// recursive way
function zigzagLevelOrder2(root) {
  let ans = [];

  function traversel(curr, level) {
    if (!curr) return;

    if (ans.length === level) {
      ans.push([]);
    }

    if (level % 2 === 0) {
      ans[level].push(curr.val);
    } else {
      ans[level].unshift(curr.val);
    }

    traversel(curr.left, level + 1);
    traversel(curr.right, level + 1);
  }

  traversel(root, 0);
  return ans;
}

// if given [3,9,20,null,null,15,7] it returns [[3],[20,9],[15,7]].
// if given [1] it returns [[1]].
// if given [] it returns [].

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
function lowestCommonAncestor(root, p, q) {
  let lca = null;

  function traversel(curr) {
    let count = 0;
    if (!curr) return 0;

    if (curr.val === p.val || curr.val === q.val) ++count;

    let leftCount = traversel(curr.left);
    let rightCount = traversel(curr.right);

    count = count + leftCount + rightCount;
    if (count === 2 && !lca) lca = curr;

    return count;
  }

  traversel(root);
  return lca;
}

// if given root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 it returns 3.
// if given root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4 it returns 5.

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
// recursive way
function rightSideView(root) {
  let ans = [];

  function traversel(curr, lvl) {
    if (!curr) return;

    if (lvl === ans.length) ans.push(curr.val);

    traversel(curr.right, lvl + 1);
    traversel(curr.left, lvl + 1);
  }

  traversel(root, 0);
  return ans;
}

// iterative way
function rightSideView2(root) {
  if (!root) return [];
  let ans = [];
  let q = [root];

  while (q.length) {
    let currSize = q.length;

    for (let i = 0; i < currSize; i++) {
      let currNode = q.shift();

      if (i === 0) ans.push(curr.val);

      curr.right && q.push(curr.right);
      curr.left && q.push(curr.left);
    }
  }

  return ans;
}

// if given [1,2,3,null,5,null,4] it returns [1,3,4].
// if given [1,2,3,4,null,null,null,5] it returns [1,3,4,5].

// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
function connect(root) {
  if (!root) return [];
  function traversel(curr) {
    if (!curr) return;

    if (curr.left) {
      curr.left.next = curr.right;
    }

    if (curr.right && curr.next) {
      curr.right.next = curr.next.left;
    }

    curr.left && traversel(curr.left);
    curr.right && traversel(curr.right);
  }

  traversel(root);
  return root;
}

// if given this [1,2,3,4,5,6,7] the tree should look like this [1,#,2,3,#,4,5,6,7,#]  "#" => NULL or LEVEL COMPELTE SIGN.
// if given this [] the tree should look like this [].

// Given the root of a binary tree, return the maximum path sum of any non-empty path.
function maxPathSum(root) {
  let ans = -Infinity;
  function traversel(curr) {
    if (!curr) return 0;

    let leftMax = Math.max(0, traversel(curr.left));
    let rightMax = Math.max(0, traversel(curr.right));

    let currMax = curr.val + leftMax + rightMax;

    ans = Math.max(ans, currMax);

    return curr.val + Math.max(leftMax, rightMax);
  }

  traversel(root);
  return ans;
}

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
function isValidBST(root, low = null, high = null) {
  if (!root) return true;

  let leftSide = isValidBST(root.left, low, root.val);
  let rightSide = isValidBST(root.right, root.val, high);

  if ((low !== null && root.val <= low) || (high !== null && root.val >= high))
    return false;

  return leftSide && rightSide;
}

// if given [2,1,3] it returns true.
// if given [5,1,4,null,null,3,6] it returns false.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
function searchBST(root, val) {
  let ans = null;

  function traversel(curr) {
    if (!curr) return;

    if (curr.val === val) ans = curr;

    if (curr.val > val) {
      traversel(curr.left);
    } else if (curr.val < val) {
      traversel(curr.right);
    }
  }

  traversel(root);
  return ans;
}

// if given [4,2,7,1,3], val = 2 it returns [2,1,3] i.e node 2.
// if given [4,2,7,1,3], val = 5 it returns [] i.e null.

// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion.
// top down approach
function insertIntoBST(root, val) {
  if (!root) return new TreeNode(val);

  function traversel(curr) {
    if (!curr) return;

    if (curr.val > val && curr.left === null) {
      curr.left = new TreeNode(val);
      return;
    } else if (curr.val < val && curr.right === null) {
      curr.right = new TreeNode(val);
      return;
    }

    if (curr.val > val) {
      traversel(curr.left);
    } else {
      traversel(curr.right);
    }
  }

  traversel(root);
  return root;
}

// bottom up appraoch
function insertIntoBST2(root, val) {
  if (!root) return new TreeNode(val);

  if (root.val > val) {
    root.left = insertIntoBST2(root.left, val);
  } else {
    root.right = insertIntoBST2(root.right, val);
  }

  return root;
}

// if given [4,2,7,1,3] and val as 5 it should return [4,2,7,1,3,5].
// if given [40,20,60,10,30,50,70] and val as 25 it should return [40,20,60,10,30,50,70,null,null,25].

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
// using an space complexity of O(n)
function kthSmallest(root, k) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;

    traversal(curr.left);
    ans.push(curr.val);
    traversal(curr.right);
  }

  traversal(root);
  return ans[k - 1];
}

// using space complexity of O(1)
function kthSmallest2(root, k) {
  let ans = null;
  let count = k;

  function traversal(curr) {
    if (!curr) return;
    if (ans) return;

    traversal(curr.left);
    --count;
    if (count === 0) ans = curr.val;
    traversal(curr.right);
  }

  traversal(root);
  return ans;
}

// if given [3,1,4,null,2], k = 1 it returns 1
// if given [5,3,6,2,4,null,null,1], k = 3 it returns 3

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
function lowestCommonAncestorBST(root, p, q) {
  // top down approach
  let lca = null;

  function traversel(curr) {
    if (!curr || lca) return;

    if (curr.val > p.val && curr.val > q.val) {
      traversel(curr.left);
    } else if (curr.val < p.val && curr.val < q.val) {
      traversel(curr.right);
    } else {
      lca = curr;
      return;
    }
  }

  traversel(root);
  return lca;
}

function lowestCommonAncestorBST2(root, p, q) {
  // bottom up approach
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

// if given [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8 it returns 6.
// if given [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4 it returns 2.

// implementing insert & extract method in min-heap using heapifyUp & heapifyDown.
class MinHeap {
  constructor(selector = (x) => x) {
    this.heap = [];
    this.selector = selector;
  }

  getPriority(i) {
    return this.selector(this.heap[i]);
  }

  getParentIdx(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIdx(i) {
    return 2 * i + 1;
  }

  getRightChildIdx(i) {
    return 2 * i + 2;
  }

  insert(val) {
    this.heap.push(val);
    let lastIdx = this.heap.length - 1;

    this.heapifyUp(lastIdx);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIdx = this.getParentIdx(i);
      if (this.getPriority(i) < this.getPriority(parentIdx)) {
        [this.heap[i], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[i],
        ];
        i = parentIdx;
      } else {
        break;
      }
    }
  }

  extract() {
    if (!this.heap.length) return null;

    let min = this.heap[0];
    let lastIdx = this.heap.length - 1;

    [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]];

    this.heap.pop();

    this.heapifyDown(0);

    return min;
  }

  heapifyDown(i) {
    let left = this.getLeftChildIdx(i);
    let right = this.getRightChildIdx(i);
    let smallest = i;
    let heapLen = this.heap.length;

    if (left < heapLen && this.getPriority(left) < this.getPriority(smallest)) {
      smallest = left;
    }

    if (
      right < heapLen &&
      this.getPriority(right) < this.getPriority(smallest)
    ) {
      smallest = right;
    }

    if (smallest !== i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(smallest);
    }
  }
}

let minHeap = new MinHeap((x) => x.val);
// minHeap.insert({ val: 40, name: "A" });
// minHeap.insert({ val: 0, name: "B" });
// minHeap.insert({ val: 7, name: "C" });
// minHeap.insert(10);
// minHeap.insert(5);
// minHeap.insert(1);
// minHeap.insert(33);
// minHeap.insert(3);
// minHeap.insert(0);
// console.log(minHeap.extract()); // 0
// console.log(minHeap.extract()); // 1
// minHeap.insert(2);
// console.log(minHeap.heap); // this returns [2,5,3,40,33,10].

// writing heap sort using max heap.
function heapSort(arr) {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }

  return arr;
}

function heapifyDown(arr, i, n) {
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;
  let largest = i;

  if (leftChild < n && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  if (rightChild < n && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if (largest !== i) {
    // swap the values of current node with largest node
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}

// heapSort([44, 6, 77, 1, 22, 0]);

// Given an integer array nums and an integer k, return the kth largest element in the array.
function findKthLargest(nums, k) {
  // using leetcode provided priority queue
  let pq = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }

  return pq.front();
}

// if given nums = [3,2,1,5,6,4], k = 2, it returns 5.
// if given nums = [3,2,3,1,2,4,5,5,6], k = 4, it returns 4.

// 703th leetcode question : kth largest element in stream.
var KthLargest = function (k, nums) {
  this.heap = new MinPriorityQueue();
  this.k = k;
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
  return null;
};

KthLargest.prototype.add = function (val) {
  this.heap.enqueue(val);
  if (this.heap.size() > this.k) {
    this.heap.dequeue();
  }

  return this.heap.front();
};

// if given ["KthLargest", "add", "add", "add", "add", "add"]
//          [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// it returns null, 4, 5, 5, 8, 8]
