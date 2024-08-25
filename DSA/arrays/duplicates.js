// Write a program to remove duplicates from an array ?

/* Will try to remove duplicates in two ways - 
    1.) Using extra space
    2.) Without using extra space
*/

function extraSpaceRemoveDuplicates(arr){
    let unique = []
    for(let i =0; i<arr.length ; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique
}

console.log(extraSpaceRemoveDuplicates([0,2,3,0,1,1,6,7]))

// Remove duplicates from sorted array
function sortedArray(arr){
    // Using two pointers
    if(arr.length <= 0) return []
    let slow = 1
    for(let fast = 1; fast < arr.length ; fast++){
        if(arr[fast] !== arr[fast - 1]){
            arr[slow] = arr[fast]
            slow++
        }
    }
    // When you run console.log(withoutUsingExtraSpaceDuplicates([0,0,1,1,1,2,2,3,3,4]));, the result will be: [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
    
    /**
     * 
     * Notes:
        The array has been modified such that the first slow elements [0, 1, 2, 3, 4] are the unique elements.
        The rest of the array contains remnants of the original array, but those values can be ignored since the array's size is effectively reduced to slow.
     */
    
    return arr.slice(0, slow)
}

console.log(sortedArray([0,0,1,1,1,2,2,3,3,4]))


function unSortedArray(nums){
    if(nums.length == 0){
        return []
    }
    let n = nums.length 
    // Without using extra space
    for(let i=0; i<n ;i++){
        for(j = i+1; j<n;j++){
            if(nums[i] == nums[j]){
                // Duplicate is found so we need to shift ele to left
                for(k =j; k<n - 1; k++){
                    nums[k] = nums[k + 1]
                }
                n--
                j--
            }
        }
    }
    // Resize the array to n size
    nums.length = n
    return nums
}

console.log(unSortedArray([0,2,3,0,1,1,6,7]))