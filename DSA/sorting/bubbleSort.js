/**
 * 
 * Bubble Sort is one of the common algorithm techniques in Sorting
 * 
 */

const nums = [7, 2, 5, 9, 4, 8, 0, 6, 1]

function bubbleSort(nums){
    for(let i=1; i<nums.length; i++){
        for(let j=0; j<nums.length -1; j++){
            if (nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums
}

console.log(bubbleSort(nums))

// Time - O(n2) --> We are looping twice