function findMinimumElement(arr){
    if (arr.length == 0) {
        console.error("Array is empty")
        return
    }
    let minimumElement = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (minimumElement > arr[i]) {
            minimumElement = arr[i];
        }
    }
    console.log(minimumElement)
    return minimumElement
}

findMinimumElement([0, 10, -7, 4, 70, -1, 40, 3])  // Output => -7


// Time Complexity = O(n) ==> We are loop through the array 
// Space Complexity = O(1)