/**
 * Insertion Sort
 * 
 */

function insertionSort(nums){
    for (let i = 0; i < nums.length; i++) {
        let j = i // Keep track of i
        while (j > 0 && nums[j-1] > nums[j]) { // compare current and previous element
            [nums[j], nums[j-1]] = [nums[j-1], nums[j]] // swap it 
            j -= 1
        }
    }
    return nums
}

console.log(`Insertion Sort => ${insertionSort([7, 2, 5, 9, 4, 8, 0, 6, 3, 1])}`)


// Time ===> O(n^2)