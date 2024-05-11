/**
 * Find First and Last Position of Element in Sorted Array
 * 
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
 */

function searchRange(nums, target) {
    // create a common/helper function for binary search which will call for left and right searching
    const binarySearch = (isSearchingLeft) => {
        // Take two pointers and keep a track of index
        let left = 0
        let right = nums.length - 1
        let index = -1
        // Loop till left < right
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            // Check if target is greater than or less than
            if (nums[mid] < target) {
                left = mid + 1
            }
            else if (nums[mid] > target) {
                right = mid - 1
            }
            else {
                index = mid
                if (isSearchingLeft) {
                    right = mid - 1 // Move right pointer if isSearchingLeft is true
                }
                else {
                    left = mid + 1
                }
            }
        }
        return index
    }

    const left = binarySearch(true)
    const right = binarySearch(false)
    return [left, right]
}

const nums = [5, 7, 7, 8, 8, 10]; const target = 8

console.log("First & Last Position of target element -> ", searchRange(nums, target))

// O(logN) Time & o(1) space


// Find First and Last position element in sorted array

function findFirstOccurenceOfEle(arr, target){
    let left = 0
    let right = arr.length - 1
    let answer = 0
    while(left <= right){
        let mid = Math.floor(left + ((right - left) / 2))
        if (arr[mid] === target) {
            answer = mid
            right = mid - 1
        }
        else if (arr[mid] < target){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return answer
}

console.log(`First Occurence of ${3} is -> ${findFirstOccurenceOfEle([1,2,3,3,5], 3)}`)

function findLastOccurenceOfEle(arr, target){
    let left = 0
    let right = arr.length - 1
    let answer = 0
    while(left <= right){
        let mid = Math.floor(left + ((right - left) / 2))
        if (arr[mid] === target) {
            answer = mid
            left = mid + 1
        }
        else if (arr[mid] < target){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return answer
}

console.log(`Last Occurence of ${3} is -> ${findLastOccurenceOfEle([1,2,3,3,3,5], 3)}`)


// So in the question we need to find the pair of first & last occurence of element - We will combine above function

function pairOfFirstNLastPosition(arr, target){
    function searchFirstNLastOccurence(isLeftSearching){
        let left = 0
        let right = arr.length - 1
        // We will keep the track of mid element
        let answer = -1 // Because if element is not present then return -1
        while(left <=  right){
            // Find Mid ele
            let mid = Math.floor(left + ((right-left)/2))
            // If mid element is target then store mid in answer
            if (arr[mid] === target) {
                answer = mid
                // Checking if target is there in left or right side
                if (isLeftSearching) {
                    right = mid - 1
                }
                else{
                    left = mid + 1
                }
            }
            else if(arr[mid] < target){
                left = mid + 1
            }
            else{
                right = mid - 1
            }
        }
        return answer
    }

    // We will recursively call for left and right side 
    const left = searchFirstNLastOccurence(true)
    const right = searchFirstNLastOccurence(false)
    return [left, right]
}

const targetEle = 3
console.log(`First & Last position of ${targetEle} is -> ${pairOfFirstNLastPosition([1,2,3,3,3,5], targetEle)}`)
