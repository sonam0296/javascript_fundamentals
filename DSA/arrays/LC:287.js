// Find the Duplicate Number
// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2


// Approach 1 ==>> O(n) Time and O(n) Space
function findDuplicates (arr){
    let obj = {}
    arr.forEach(element => {
        obj[element] = (obj[element] || 0) + 1
    });
    for(let key in obj){
        if (obj[key] > 1) {
            return key
        }
    }
    return null
}

console.log(findDuplicates([1,3,4,2,2]))

// --------------------------------------------------------------------------

// Approach 2 ==>> Floyd's Tortoise and Hare  ====>>>> O(n) Time & O(1) Space

function findDuplicatesUsingTortoiseHare(nums){
    let slow = nums[0]
    let fast = nums[0]

    // Find the cycle
    while(true){
        slow = nums[slow]
        fast = nums[nums[fast]]
        if(slow == fast){
            break
        }
    }

    // Reset the slow
    slow = nums[0]
    while(slow !== fast){
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
}

console.log(findDuplicatesUsingTortoiseHare([1,3,4,2,2]));
