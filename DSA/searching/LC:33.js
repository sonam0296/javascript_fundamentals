/**
 * Search in Rotated Sorted Array
 * 
 * Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
 * 
 */

function search(nums, target) {
    // Keep two pointers 
    let left = 0
    let right = nums.length - 1
    // Loop till left <= right
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        // Check if mid element is target
        if (nums[mid] === target) {
            return mid
        }
        // Search in left sorted portion
        if (nums[mid] >= nums[left]) {
            if (nums[mid] < target || target < nums[left]) { // Check if mid < target || target < left
                left = mid + 1 // B'coz target is in right sorted portion
            }
            else {
                right = mid - 1
            }
        }
        else {
            if (nums[mid] > target || target > nums[right]) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }
    }
    return -1
}

const nums = [4, 5, 6, 7, 0, 1, 2]
const target = 0

console.log(`Index of target element is: ${search(nums, target)}`)

// Time - O(logN) & Space - O(1)


// Binary Search ---

function searchInSortedArr(arr, target) {
    let pivot = findPivotIndex(arr)
    let n = nums.length - 1
    if (arr[pivot] <= target && target <= arr[n - 1]) { // Check in right side 
        return binarySearch(arr, pivot, n - 1, target)
    }
    else { // Check in left side 
        return binarySearch(arr, 0, pivot - 1, target)
    }
}

console.log(`Index of target element is -> ${searchInSortedArr([3,4,5,6,1,2], 2)}`)

function findPivotIndex(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let mid = Math.floor(left + ((right - left) / 2))
        if (arr[mid] >= arr[0]) {
            left = mid + 1
        }
        else {
            right = mid
        }
    }
    return left
}

function binarySearch(arr, start, end, target) {
    let left = start
    let right = end
    while (left <= right) {
        let mid = Math.floor(left + ((right - left) / 2))
        if (arr[mid] == target) {
            return mid
        }
        else if (arr[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return -1
}