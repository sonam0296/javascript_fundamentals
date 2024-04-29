// Find All Duplicates in an Array

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Approach 1 ==>> O(n)Time and O(n) Space

function duplicateList(arr) {
    let obj = {}
    arr.forEach(ele => {
        obj[ele] = (obj[ele] || 0) + 1
    });
    let array = []
    for (let key in obj) {
        if (obj[key] > 1) {
            array.push(key)
        }
    }
    return array
}

// console.log(duplicateList([4,3,2,7,8,2,3,1]))

// Optimized Solution ==>> O(n) Time and O(1) Space

// The approach we used is called the "negation marking" or "cycle detection" technique. 
// This approach utilizes the fact that the input array contains positive integers within a specific range (from 1 to n, where n is the length of the array). 
// We exploit this property to mark the presence of elements by negating the value at the corresponding index in the array.

/**
 * Iterate through the input array.
 *For each element arr[i], if its value is positive, it means we haven't encountered it before. So, we mark its presence by changing the value at index arr[i] - 1 to its negative counterpart.
 *If we encounter an element whose value at index arr[i] - 1 is already negative, it means we have encountered it before. So, we add its absolute value to the result array.
 *Finally, we return the result array containing the duplicate elements.
 */

function duplicate(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        const index = Math.abs(arr[i]) - 1
        if (arr[index] < 0) {
            result.push(Math.abs(arr[i]))
        }
        else {
            arr[index] = -arr[index]
        }
    }
    return result
}

console.log(duplicate([4, 3, 2, 7, 8, 2, 3, 1]))
