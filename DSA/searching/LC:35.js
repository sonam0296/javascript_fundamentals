/**
 * Search Insert Position
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
 *  
 */

const nums = [1,3,5,6] ; const target = 5

const searchInsertPosition = (nums, target) => {
    // Here we will using binary search approach
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        let mid = Math.floor((left + right)/2)
        if (nums[mid] == target) {
            return mid
        }
        if(nums[mid] < target){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return left // here we always return -1 but in this case we need to return the left index
}

console.log(`Index of insert position is : ${searchInsertPosition(nums, target)}`)