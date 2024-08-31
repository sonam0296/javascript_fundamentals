/**
 * 
 * Find nth element from end of array
 */

function findNthNode(arr, n){
    if(arr.length < n ) return null // here if n is not there and number is there then that will come
    let index = arr.length - n
    return arr[index]
}

console.log(findNthNode([12,3,4,5,6,7,8,9], 4))