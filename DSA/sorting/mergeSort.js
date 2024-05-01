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

console.log(`Merge Sort => ${mergeSort(nums, 0, nums.length - 1)}`)