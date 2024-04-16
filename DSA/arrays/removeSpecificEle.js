// Remove Specific Element:
// Given an array of integers and a specific element, write a function to remove all occurrences of that element from the array. 
// The function should return a new array with all occurrences of the specified element removed, while maintaining the order of the remaining elements.


// Brute Force Approach 
function removeSpecificElement(arr, elementToRemove){
    for(let i=0; i< arr.length; i++){
        if (arr[i] == elementToRemove) {
            arr.splice(i, 1) 
        }
    }
    console.log(arr)
}

removeSpecificElement([1, 2, 3, 4, 2, 5, 2], 2)

// Time ==>>> O(n^2) if multiple elements are present which is to  be removed
//  Space ===>>> O(1)

 
// Optimized Approach ===> With using extra space and linear time complexity ==>> O(n)

function removeElementUsingFilter(arr, elementToRemove){
    return arr.filter(ar=> ar !== elementToRemove)
}

console.log(removeElementUsingFilter([1, 2, 3, 4, 3, 5, 3], 3))


// Optimized Approach ===> Without extra space in-place removal


// Using two pointer approach both left and right pointing at start of array

function inPlaceRemoval(arr, elementToRemove){
    let left = 0
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] !== elementToRemove) {
            arr[left++] = arr[right];
        }
    }
    arr.length = left // truncate extra elements
    console.log(arr)
}

inPlaceRemoval([1, 2, 3, 4, 3, 5, 3], 3)

// Time =>>>> O(n)
// Space =>>>> O(1)  // extra space 