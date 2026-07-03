# Basic DSA problems

-searchEle()
-searches the element given in the array and returns its index(position), if not found returns -1.

-countNegative
-counts the number of negative numbers in the given array and returns its count.

-findLargest()
-finds the largest element in an array and returns it.

-findSecondLargest()
-finds the second largest element in the array and also checks if my second largest element isnt equal to the largest element.

-just updated findSecondLargest() to thirdLargest(), to check if i can find the thirdlargest element as well or not.

-firstStarPattern(), secondStarPattern(), thirdStarPattern(), fourthStarPattern()-[not easy].
-start pattern questions that print out start patterns using loop in loop O(n2) complexity.

-numberPatternOne(),numberPatternTwo(), numberPatterThree(), numberPatternFour().
-number patterns that are not so easy to handle.

-calculateNumber()
-return the count of numbers present in the given number
-for ex : 4523 has 4 numbers and 0 has 1 number

-findIsPalindrome()
-returns true if the given number is palindrome otherwise returns false, works for negative numbers as well.

-reverseDigit()
-reverse the number without changing its (+ -) signs & it should also be in the (-2**31 and 2**31 -1) range only if not return 0.

-removeElement(arr,val) // 27. remove element leetcode question.
-removes occurances of val in the arr given on place then returns the count of elements that are not equal to val.

-reverseString(str) // 344.reverse string leetcode question.
-reverses given str on place.

-best time to buy and sell. // 121th leetcode question
-the problem is to find the maximum profit that you can have by firstly buying the stock and then sell it on profit in future. keep in mind you cant sell your stock on the same day. if no profit was possible return 0 as profit.

-moveZeroes() // 283th leetcode question.
-moves all the zeroes to the end of array and all the non-zero number to the front with the same order as the loop will face.

-missingNumber() // 268th leetcode question.
-returns the missing number from the array max and min number.

-singleNumber(arr)
-singleNumber2(arr) // second approach with bitwise XOR
-Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

-sumOfAll(), sumOfAllEven(), sumOfAllOdd(), factorialOf()
-These functions return the value as their name suggests using recursion method specifically from an given array except the last one returns factorial of given n value.

-findFibo() // 509. Fibonacci Number
-finds the fibonacci of given number n. (recursive & for loop method)

-sortArr()
-sorts the given array using bubble sort algorithm.

-selectionSort()
-sorts the given array using selection sort algorithm.

-insertionSort()
-sorts the given array using insertion sort algorithm.

-mergeSort()
-sorts the given array using merge sort algorithm.

-reverseList(head)
-Given the head of a singly linked list, reverse the list, and return the reversed list.

-hasCycle() #141th.linked list cycle leetcode question.
-returns true if given linked list has cycle, if not returns false.

-getIntersectionNode() #160th. Intersection of Two Linked Lists
-returns the node from where the two nodes intersect with each other.

-removeNthFromEnd() #19th. Remove Nth Node From End of List
-returns the LL with nth node from the end of LL removed;

-deleteDuplicates() #83th. Remove Duplicates from Sorted List
-returns LL with no duplicates in sight.

-oddEvenList() #328th. Odd Even Linked List
-returns LL with odd indexed nodes first and after that even indexed nodes at the end of last odd node

-swapPairs() #24th. Swap Nodes In Pairs.
-returns the swapped pair LL.

-lengthOfLastWord()
-returns length of last word from given string.

-findWordsContaining(words,x)
-returns indexes of the words that contain given word x.

-numJewelsInStones(jewels, stones)
-returns how many stones i have are jewels.

-maxFreqSum()
-returns the sum of maximum vowel and maximum consonent.

-balancedStringSplit()
-returns the number of times R and L were in balanced pairs.

-reverseStr(s,k) // for me it wasnt easy at all took hours to really understand how the solution is really working
-returns reversed string with each first k characters being reversed.

-isPalindrome(s) //#125th. leetcode question
-returns true if the alphanumeric characters of string are palindrome else returns false.

-largestOddNumber(num)
-returns the largest odd number present in given string else returns empty string

-longestCommonPrefix(strs)
-returns the largest common prefix out of all provided array of strings.

-isAnagram(s,t)
-returns true or false if the given s string is anagram of t string.

-isIsomorphic(s,t)
-returns true if s is isomorphic of t else returns false.

-groupAnagrams(strs)
-returns the grouped anagrams together in an array in any order.
-solved it with 2 approaches first one with time complexity of O(n _ m log m) and second one with O(n _ m)

-learned about stack and queues
-when to use which.
-#225th. implement stack using queues, leetcode question.

-#232th. Implement a queue using stacks.

-isValid(s) #20th.leetcode question.
-return true or false if given string is a valid parentheses.

-MinStack #155th. min stack leetcode question.
-performs each task with O(1) time complexity

-removeOuterParentheses(s) #1021th.leetcode question.
-returns a string by removing its outermost valid parentheses brackets.

-evalRPN(tokens) #150th. leetcode question
-returns a final calcualted integer from a tokens list in order of reverse polish notation.

-dailyTemperatures(temp) #739th. leetocde question
-return an array ans such that ans[i] is the number of days you have to wait after the ith day to get a warmer temperature.

-nextGreaterElement(num1,num2) #496th. Next Greater Element I, leetcode question
-returns an array ans of length nums1.length such that ans[i] is the next greater element as described above.

-nextGreaterElement(nums) #503th. Next Greater Element II leetcode question
-return the next greater number for every element in nums.

-maxMin(grid) #994th. Rotting Oranges, leetcode question.
-returns the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

-binSearch(nums,target) #33th leetocde question.
-returns the index of target if it is in nums, or -1 if it is not in nums.

-mySqrt(x) #69th leetcode question
-returns the square root of given number if the given number is not a complete square root of an number then return the closest minimum square root number.

-findPeakElement(nums) #162th leetcode question.
-given 0-indexed integer array nums, find a peak element, and return its index.

-findMin(nums) #153th leetcode question.
-Given the sorted rotated array nums of unique elements, return the minimum element of this array.

-peakIndexInMountainArray(arr) #852th. Peak Index in a Mountain Array leetcode question
-array arr of length n where the values increase to a peak element and then decrease. Return the index of the peak element.

-singleNonDuplicate(nums) #540th leetcode question.
-Return the single element that appears only once.

-findClosestElements(arr,k,x) #658th leetcode question.
-Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.

-strSttr(haystack,needle) #28th leetcode question.
-Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

-maxArea(height) #11th. Container With Most Water leetcode question.
-Return the maximum amount of water a container can store.

-trap(height) #42th.Trapping rain water leetcode question.
-Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

-characterReplacement(s,k) #424th. Longest Repeating Character Replacement leetcode question.
-Return the length of the longest substring containing the same letter you can get after performing the above operations.

-checkInclusion(s1,s2) #567th. Permutation in String leetcode question.
-return true if one of s1's permutations is the substring of s2.

-preorderTraversal(root) #144th. Binary Tree Preorder Traversal leetcode question.
-Given the root of a binary tree, return the preorder traversal of its nodes' values.
-also wrote it in iterative approach.

-inorderTraversel(root)
-in iterative appraoch

-postorderTraversel(root)
-in iterative approach using 2 stacks.
-in iterative approach using 1 stack.

-isSymmetric(root) #101th leetcode question.
-in recursive approach.
-in iterative approach.

-isSameTree(p,q) #100th leetcode question.
-Given the roots of two binary trees p and q, write a function to check if they are the same or not.

-isBalanced(root) #110th leetcode question.
-Given a binary tree, determine if it is height-balanced.

-zigzagLevelOrder(root) #103th leetcode question.
-Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.

-lowestCommonAncestor(root,p,q) #236th. Lowest Common Ancestor of a Binary Tree leetcode question
-Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

-rightSideView(root)
-Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

-connect(root) #116th leetcode question.
-Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

-maxPathSum(root) #124th leetcode question.
-Given the root of a binary tree, return the maximum path sum of any non-empty path.

-isValidBST(root) #98th leetcode question.
-Given the root of a binary tree, determine if it is a valid binary search tree (BST).

-searchBST(root,val) #700th leetcode question.
-Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

-insertIntoBST(root,val) #701th leetcode question.
-You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion.

-kthSmallest(root,k) #230th leetcode question.
-Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
