/**
 * Search a 2D Matrix
 * 
 * You are given an m x n integer matrix matrix with the following two properties:
    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.
    Given an integer target, return true if target is in matrix or false otherwise.
    You must write a solution in O(log(m * n)) time complexity.
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true
 */


const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]; const target = 3

function search(matrix, target){
    // Using binary search
    // Step 0: Initialization with rows, cols, left and right
    let rows = matrix.length
    let cols = matrix[0].length
    let left = 0
    let right = (rows * cols) - 1
    // Loop 
    while(left <= right){
        // Find mid 
        let mid = Math.floor((left + right)/2)
        // Find mid value using mid and cols
        let mid_val = matrix[Math.floor(mid / cols)][mid % cols]

        // Now check
        if(mid_val === target){
            return true
        }
        if (mid_val < target) {
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return false
}

console.log(search(matrix, target))
