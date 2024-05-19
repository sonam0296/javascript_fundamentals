/**
 * Merge Sort
 * -->>> Recursively calling
 * -->>> Divide & Conquer
 */

function mergeSort(arr, lo, hi) {
    if (arr.length <= 1) {
        return arr;
    }
    if (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        mergeSort(arr, lo, mid);
        mergeSort(arr, mid + 1, hi);
        merge(arr, lo, mid, hi);
    }
    return arr;

}

function merge(arr, low, mid, high) {
    let sortedRes = []
    let i = low // start of left index
    let j = mid + 1 // start of right index
    // loop till i <= mid and  j <= high
    while (i <= mid && j <= high) {
        // Compare
        if (arr[i] < arr[j]) {
            sortedRes.push(arr[i])
            i++
        }
        else {
            sortedRes.push(arr[j])
            j++
        }
    }
    // If any values remain in i and j
    while (i <= mid) {
        sortedRes.push(arr[i])
        i++
    }
    while (j <= high) {
        sortedRes.push(arr[j])
        j++
    }
    for (let k = low; k <= high; k++) {
        arr[k] = sortedRes[k - low]
    }
}

const nums = [2, 8, 5, 3, 9, 4, 1, 7]

// console.log(`Merge Sort => ${mergeSort(nums, 0, nums.length - 1)}`)



// MERGE SORT 

function mergeSorting(arr, start, end) {
    // Base condition
    if (start >= end) {
        return
    }
    // Finding mid
    let mid = Math.floor(start + ((end - start)/2))
    // Recursion 
    mergeSort(arr, start, mid) // left part
    mergeSort(arr, mid + 1, end) // right

    // Merge the left & right 
   return mergingBothPart(arr, start, end)

}
function mergingBothPart(arr, start, end) {
    let mid = Math.floor(start + ((end - start)/2))
    let leftLeng = mid - start + 1
    let rightLeng = end - mid

    let leftArr = new Array(leftLeng);
    let rightArr = new Array(rightLeng);

    // Copy left part in leftArr
    for (let i = 0; i < leftLeng; i++) {
        leftArr[i] = arr[start + i];
    }

    // Copy right part in rightArr
    for (let i = 0; i < rightLeng; i++) {
        rightArr[i] = arr[mid + 1 + i];
    }

    // Merge two sorted arrays
    let index1 = 0, index2 = 0, mainArrIndex = start;
    while (index1 < leftLeng && index2 < rightLeng) {
        if (leftArr[index1] <= rightArr[index2]) {
            arr[mainArrIndex] = leftArr[index1];
            index1++;
        } else {
            arr[mainArrIndex] = rightArr[index2];
            index2++;
        }
        mainArrIndex++;
    }

    // Copy any remaining elements of leftArr
    while (index1 < leftLeng) {
        arr[mainArrIndex] = leftArr[index1];
        index1++;
        mainArrIndex++;
    }

    // Copy any remaining elements of rightArr
    while (index2 < rightLeng) {
        arr[mainArrIndex] = rightArr[index2];
        index2++;
        mainArrIndex++;
    }
    delete leftArr
    delete rightArr
    return arr
}

console.log(`Merge Sorting -> ${mergeSorting(nums, 0, nums.length - 1)}`)