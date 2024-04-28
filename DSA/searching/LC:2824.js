/**
 *  Count Pairs Whose Sum is Less than Target -->> 
 * Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
 *  Example 1:

Input: nums = [-1,1,2,3,1] target = 2
Output: 3
Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
- (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
- (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target 
- (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.
 * 
 */

// ----------------------------- SOLUTION ---------------------------------

/**
 *  We can solve this using many approaches :::---
 *      1.) Brute Force  : Using nested loop and increment value of count. O(n2)Time & O(1)Space
 *      2.) Optimal Solution : Using Two pointers or Binary Search . O(nlogn) Time and O(log n) space
 */

const nums = [-1, 1, 2, 3, 1];
const target = 2

// 1.) Brute force
function linearCountPairs(nums, target) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                count++
            }
        }
    }
    return count
}
console.log(`Pair using linear approach -> ${linearCountPairs(nums, target)}`)

// 2.) Two Pointer 

function twoPointer(nums, target) {
    // Step 0 : Sort the list
    nums.sort((a, b) => a - b)
    // Step 1 : Keep two pointers at start and end of list
    let left = 0
    let right = nums.length - 1
    let count = 0
    // Step 2 : Loop till left < right
    while (left < right) {
        // Step 3 : Check if nums[left] + nums[right] < target 
        if (nums[left] + nums[right] < target) {
            count = right - left // Update count
            left++ // Move the left pointer
        }
        else {
            right--
        }
    }
    return count
}

console.log(`Pair using two pointer approach -> ${twoPointer(nums, target)}`)

// 3.) Binary Search -- Optimal Solution

function countPairsUsingBinarySearch(nums, target) {
    // Sort the array as binary search work with sorted array
    nums.sort((a, b) => a - b)
    let count = 0
    // Loop through the nums list
    for (let i = 0; i < nums.length; i++) {
        let index = binarySearch(target - nums[i], i, nums)
        count += index
    }
    return count
}

function binarySearch(target, right, arr) {
    // Implement binary search
    let left = 0
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] >= target) {
            right = mid
        }
        else {
            left = mid + 1
        }
    }
    return left
}

console.log(`Pair using binary search approach -> ${countPairsUsingBinarySearch(nums, target)}`)