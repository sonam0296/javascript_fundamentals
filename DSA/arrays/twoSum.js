/**
 * Two Sum: Given an array of integers and a target integer, find two indices of the numbers such that they add up 
 * to the target.
 */

function twoSumBruteForce(nums, target){
    // Brute force
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }        
    }
    return -1
}

console.log(twoSumBruteForce([3,2,4] , 6)) //[3,2,4] , 6 //[2,7,11,15], 9

/**
 * 
 * With the brute force approach -- 
 * Time complexity => O(n2)
 * Space complexity => O(n)
 */

// Using hash map
function twoSumOptimize(nums, target){
    let map = new Map()
    for(let i=0;i<nums.length; i++){
        let diff = target - nums[i]
        if(map.has(diff)){
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
    return -1
}

console.log(twoSumOptimize([3,2,4] , 6))

/* Using the hash map approach ->
    Time => O(n)
    Space => O(n)
*/