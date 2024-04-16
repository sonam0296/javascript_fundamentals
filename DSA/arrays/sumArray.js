// Question:
// Write a function called sumArray that takes an array of numbers as input and returns the sum of all elements in the array.

function sumArray(arr){
    if (arr.length == 0) {
        console.log(0)
        return
    }
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i]
    }
    console.log(sum)
    return sum
}

sumArray([0, 10, -7, 4, 70, -1, 40, 3])  // O/p => 119
// sumArray([])

// Time Complexity = O(n) ==> We are loop through the array 
// Space Complexity = O(1)