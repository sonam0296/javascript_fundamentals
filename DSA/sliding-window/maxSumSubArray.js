/**
 * Suppose you have an array, and you want to find the maximum sum of any contiguous subarray of size k.
 * 
 * const arr = [2, 1, 5, 1, 3, 2];
    const k = 3;
    You want to find the maximum sum of any subarray of length 3.

    Explanation of problem -->> 
    We need to find max sum of size only 3 i.e 2+1+5 = 8, 1+5+1 = 7, 5+1+3 = 9, 1+3+2 = 6
    So max = 9 

    This is a fixed sized sliding window technique
 */

// Brute Force Approach
function bruteForceMaxSumSubArr(arr, k){
    let maxSum = 0 // track the max sum
    for(let i=0; i<arr.length - k;i++ ){ // Loop from 0 till k window size
        let currentSum = 0
        for(let j = i; j<i+k; j++){
            currentSum += arr[j]
        }
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}

console.log(bruteForceMaxSumSubArr([2, 1, 5, 1, 3, 2], 3))

// Using brute force approach gives us max sum but ..................

// Time Complexity -> O(n*k) which is worst case we can solve the same with O(n) using sliding window technique

function maxSumSubArraySlidingWindow(arr, k){
    let maxSum = 0 // keep track of max sum
    let windowSum = 0 // each window sum
    // Get sum of current window size i.e from O to k
    for(let i=0; i<k;i++){
        windowSum+= arr[i]
    }
    maxSum = windowSum // for now maxSum will be windowSum
    // Loop from k till end
    for(let i=k; i<arr.length; i++){
        // move the window size and remove the previous index value from windowsum
        windowSum += arr[i] - arr[i-k]
        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum
}

console.log('Max sum using sliding window => ',maxSumSubArraySlidingWindow([2, 1, 5, 1, 3, 2], 3))

// Using the sliding window approach we have optimized the solution 

// Time complexity -> O(n)

// Use cases -- Efficiency, Simplicity