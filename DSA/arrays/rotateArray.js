// Rotate Array

// You are given an array of integers nums and an integer k, where k is a non-negative integer. You need to rotate the array to the right by k steps.

// For example, given the array nums = [1, 2, 3, 4, 5] and k = 2, the array should be rotated to [4, 5, 1, 2, 3].

// In-place rotate
function rotatedArray(arr, k){
    k = k % arr.length
    //  Reverse the whole array from 0 to last
    let left = 0 ; let right = arr.length - 1
    while (left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]] // In-place reversal 
        left += 1
        right -= 1
    }

    //  Reverse the array from 0 to k i.e 0 - 1
    let left1 = 0 ; let right1 = k - 1
    while (left1 < right1){
        [arr[left1], arr[right1]] = [arr[right1], arr[left1]] // In-place reversal 
        left1 += 1
        right1 -= 1
    }

    //  Reverse the array from k to  array.length i.e 0 - 1
    let left2 = k ; let right2 = arr.length - 1
    while (left2 < right2){
        [arr[left2], arr[right2]] = [arr[right2], arr[left2]] // In-place reversal 
        left2 += 1
        right2 -= 1
    }
    console.log(arr)
}

rotatedArray([1, 2, 3, 4, 5], 2)
