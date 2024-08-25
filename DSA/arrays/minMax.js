/**
 * 
 * Finding the maximum and minimum elements: Find the maximum and minimum elements in an array.
 */

function minMaxNum(nums){
    let min = 0
    let max = 0
    for(let i=0; i<nums.length;i++){
        if(max < nums[i]){
            max = nums[i]
        }
        if(min > nums[i]){
            min = nums[i]
        }
    }

    return `Max number is ${max} and min value is ${min}`
}

console.log(minMaxNum([1,3,14,9,15,2,6,20,-3]))