function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Find pivot element
        let pivot_position = partition(arr, low, high);
        quickSort(arr, low, pivot_position - 1); // Sort left sub-array
        quickSort(arr, pivot_position + 1, high); // Sort right sub-array
    }
    return arr; // Return the sorted array
}

// Function to partition the array and return the partition index
function partition(arr, low, high) {
    // Choosing the pivot
    let pivot = arr[high];
  
    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
  
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
  
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
    return i + 1; // Return the partition index
}

// console.log(`Quick Sort => ${quickSort([2, 6, 5, 3, 8, 7, 1, 0])}`);


// QUICK SORT

function quickSorting(arr, start, end){
    if(start >= end){
        return
    }
    // Partition
    const p = partition(arr, start, end)
    quickSort(arr, start, p-1)
    quickSort(arr, p+1, end)
    return arr
}

function partition(arr, start, end){
    // Take pivot -- Here I have taken 1st element as pivot
    let pivot = arr[start]
    let count = 0
    for(let i=start+1; i<end; i++){ // Because we need to start from 2nd element as 1st is pivot
        if (arr[i] < pivot) {
            count++
        }
    }
    // Place pivot at right place position
    let pivotIndex = start + count;
    [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]] // Swap

    // Left & right part
    let left=start;
    let right = end
    while(left < pivotIndex && pivotIndex < right){
        // Koi element pivot se less he
        while(arr[left] < pivot){
            left ++
        }
        while(arr[right] > pivot){
            right--
        }
        if (left < pivotIndex && pivotIndex < right) {
            // Swap
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return pivotIndex

}

console.log(`Quick Sorting => ${quickSorting([2, 4, 1, 6, 9], 0, [2, 4, 1, 6, 9].length - 1)}`) 