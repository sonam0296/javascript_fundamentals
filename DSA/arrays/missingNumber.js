// Find Missing Number:

// You are given an array containing n distinct numbers taken from 0, 1, 2, ..., n, except for one missing number. 
// Your task is to find and return the missing number.

let nums = [3, 0, 1, 4]

function missingNumber(arr){
    // Keep a variable through which we can keep a track of missing varibale which will be length of arr
    let result = arr.length
    for(let i=0; i<arr.length; i++){
        // Now we need to add and subtract the elements and results
        result = result + (i - arr[i]) 
        // 1st iteration ==>>> result = 4; result = 4 +  (i ie. 0 - arr[i] ie. arr[0] -> 3) = 4 + (-3) = 1
        // 2nd iteration ==>>> result = 1; result = 1 +  (i ie. 1 - arr[i] ie. arr[1] -> 0) = 1 + 1 = 2
        // 3rd iteration ==>>> result = 2; result = 2 +  (i ie. 2 - arr[i] ie. arr[2] -> 1) = 2 + 1 = 3
        // 4rd iteration ==>>> result = 3; result = 3 +  (i ie. 3 - arr[i] ie. arr[3] -> 4) = 3 + (-1) = 2

        // Therefore 2 is the output === As 2 is missing
    }
    console.log(result)
}

missingNumber(nums)

// Time Complexity => O(n)
// Space => O(1) // we are not using any extra space