/**
 * 
 * Sliding window is a technique/pattern useful to solve problems involving subarrays or substring in a larger array or string
 * 
 *  1.) Fixed Sized : 
 *      Eg- Maximum sum of subarray of size 'k'
 */


function maxSum(arr, k){
    // Maintain two variables i.e curr_sum and max_sum

    let currSum = 0
    let maxSum = 0
    // Loop from 0- k
    for(let i=0; i<k; i++){
        currSum+= arr[i]
    }
    // Now assign currSum value to maxSum
    maxSum = currSum
    // Loop from k till end
    for(let i=k; i<arr.length; i++){
        // Add the next value to sum and subtract one previous elem
        currSum = currSum + arr[i] - arr[i-k] // sliding the window 
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum
}

console.log(maxSum([4,2,1,7,8,1,2,8,1,0], 3))