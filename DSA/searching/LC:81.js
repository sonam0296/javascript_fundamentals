/**
 * Search in Rotated Sorted Array II
 * 
 * 
 * Example 1:
    Input: nums = [2,5,6,0,0,1,2], target = 0
    Output: true
 */

const nums = [2,5,6,0,0,1,2]
const target = 0

function search(nums, target){
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if (mid == target) {
            return true
        }
        // Check if mid and left ele are same then increment left by 1 and continure
        if(nums[left] === nums[mid]){
            left++
            continue
        }
        // Check in left sorted list
        if(nums[left] <= nums[mid]){
            if (nums[mid] < target || target < nums[left]) {
                left = mid + 1
            }
            else{
                right = mid - 1
            }
        }
        else{
            if(nums[mid] > target || target > nums[right] ){
                right = mid - 1
            }
            else{
                left = mid + 1
            }
        }
    }
    return false
}

console.log(search(nums, target))