/**
 *  LINEAR SEARCH ALGORITHM -->>
 *      1.) O(n) time complexity
 *      2.) Search through all the elements one by one until target element is found or list is empty
 *      3.) Use case :- Small and unsorted list
 * 
 */

function linearSearching(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

const arr = [5, 3, 10, 2, 8];
const target = 2

console.log("Index of target is : ", linearSearching(arr, target))