/**
 * Peak Index in a Mountain Array
 * An array arr is a mountain if the following properties hold:
    arr.length >= 3
    There exists some i with 0 < i < arr.length - 1 such that:
    arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
    arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
    Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
    You must solve it in O(log(arr.length)) time complexity.
 * 
 * Example 1:
    Input: arr = [0,1,0]
    Output: 1
 */

function peakElementInArray(arr){
    // Using Binary search
    let left = 0
    let right = arr.length - 1
    // Left & right index will meet at same point where we will find our peak element so we will loop till left < right
    while(left < right){
        let mid = Math.floor(left + ((right - left)/2))
        // Condition 1 -> arr[i] < arr[i+1] i.e arr[mid] < arr[mid+1] then move the left 
        if (arr[mid] < arr[mid+1]) {
            left = mid + 1
        }
        else{ // Condition 2 -> arr[mid] can we less or peak element
            right = mid // Because we don't want our right pointer to move in left side 
        }
    }
    return left
}

console.log(`Peak element in mountain array is -> ${peakElementInArray([3,4,5,1])}`)