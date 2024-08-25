/**
 * 
 * Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
 */

function merge(left, right){
    let sortedList = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            sortedList.push(left[leftIndex])
            leftIndex++
        }
        else{
            sortedList.push(right[rightIndex])
            rightIndex++
        }
    }

    while(leftIndex < left.length){
        sortedList.push(left[leftIndex])
        leftIndex++
    }

    while(rightIndex < right.length){
        sortedList.push(right[rightIndex])
        rightIndex++
    }

    return sortedList
}

console.log(merge([0,3,4,31], [4,6,30]))