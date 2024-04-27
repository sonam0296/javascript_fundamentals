/**
 *  BINARY SEARCH ALGORITHM --->>
 *      1.) O(log n) Time
 *      2.) After finding middle element check if that element is the target then return else check if target is greater than search in righ
 *          side or else check in left side of array and return the index
 *      3.) Use case :- Large and sorted array/lists
 * 
 */

function binarySearching(arr, target){
    // Step 0 - Keep two pointers which will point at start and end of list
    let left = 0
    let right = arr.length - 1
    // Step 1 - Loop till left < right
    while(left <= right){
        // Step 2 - Find middle element and index
        let mid = Math.floor((left + right) / 2)
        // Step 3 - Check if target element is same as arr[mid]
        if (arr[mid] === target) {
            return mid
        }
        else if (arr[mid] < target) {
            left = mid + 1 // Target is in right side
        }
        else{
            right = mid - 1 // Target is in left side
        }
    }
    return -1

}

const arr = [1,2,3,4,5,6,7,8,9]
const target = 8

console.log(`Index for ${target} element is at ${binarySearching(arr, target)}`)