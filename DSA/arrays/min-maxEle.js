/**
 * 
 * Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum 
 * number of comparisons.
 * 
 * Input: arr[] = {3, 5, 4, 1, 9}
    Output: Minimum element is: 1
    Maximum element is: 9
 * 
 */

function minMaxElement(arr){
    if (arr.length < 0) {
        return arr
    }
    let maxEle = -Infinity
    let minEle = Infinity
    for(let i=0; i<arr.length;i++){
        if(arr[i] > maxEle){
            maxEle = arr[i]
        }
        if(arr[i] < minEle){
            minEle = arr[i]
        }
    }
    console.log("Max Element -> " ,maxEle, "Min Element -> ",minEle)
    return {max: maxEle, min: minEle}
}

minMaxElement([3, 2, 1, 56, 1000, 167]) // // 3, 5, 4, 1, 9  // 3, 2, 1, 56, 1000, 167