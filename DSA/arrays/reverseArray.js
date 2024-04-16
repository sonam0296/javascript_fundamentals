// Reverse an Array: Write a function reverseArray that takes an array of elements as input and returns a new array
//  with the elements in reverse order. The original array should remain unchanged.


// Constraints:

// The input array may contain elements of any data type (e.g., numbers, strings, objects).
// The function should not modify the original array. It should create a new array with the elements in reverse order.

function reverseArray(arr) {
    let newArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    console.log(newArray)
}

reverseArray([1, 2, 3, 4, 5, -7])
// reverseArray(['a', 'd', "Hello", 9, 18.7, 'world'])


// Time & Space complexity => O(n)  As newArray will have same length as arr.



//  If we need to solve this without extra space then we need to do this in-place reversal. Here we will use two-pointer approach

function inPlaceReversal(arr) {
    // Two pointer approach
    let left = 0
    let right = arr.length - 1
    console.log(arr, '::::BEFORE REVERSE')
    while (left < right) {
       [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    console.log(arr, '::::AFTER REVERSE')
}

console.log(inPlaceReversal([6, 8, 1, 9, 13, 0]))


// Time ==>> O(n)
// Space ===> O(1)  // We did reversal in place