function findMaximumElement(arr){
    // Base condition
    if (arr.length == 0) {
        console.error('Array must not be empty')
        return
    }
    let largestEle = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(largestEle < arr[i]){
            largestEle = arr[i]
        }
    }
    // console.log(largestEle)
    return largestEle
}

console.log(findMaximumElement([0, 10, -7, 4, 70, -1, 40, 3]))  // O/p ==> 70


// Time Complexity = O(n) ==> We are loop through the array 
// Space Complexity = O(1)
