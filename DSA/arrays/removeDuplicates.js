// Question:

// Given an array of elements, write a function to find and remove duplicate elements from the array. 
// The function should return a new array with only unique elements, maintaining the original order of elements.

function removeDuplicates(arr){
    let uniqueArr = []
    for(let i=0; i< arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
    console.log(uniqueArr)
}

removeDuplicates([1,3,1,5,7,3,2,9,10,-4,0])

// Time & Space => O(n)

// In place remove duplicate original array
function removeDuplicatesUsingSet (arr){
    let set = new Set()
    let index = 0
    for(ar of arr){
        if (!set.has(ar)) {
            set.add(ar)
            arr[index++] = ar // 
        }
    }
    arr.length = index // truncate the array to remove extra elements
    console.log(arr)
}

removeDuplicatesUsingSet([1,3,1,5,7,3])
