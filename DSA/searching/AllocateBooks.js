/**
 * Allocate Books 
 * 
 * Problem statement
    Given an array ‘arr’ of integer numbers, ‘arr[i]’ represents the number of pages in the ‘i-th’ book.
    There are ‘m’ number of students, and the task is to allocate all the books to the students.
    Allocate books in such a way that:
    1. Each student gets at least one book.
    2. Each book should be allocated to only one student.
    3. Book allocation should be in a contiguous manner.
    You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. If the allocation of books is not possible, return -1.

    Example:
    Input: ‘n’ = 4 ‘m’ = 2 
    ‘arr’ = [12, 34, 67, 90]
    Output: 113
 * 
 */

function allocateBooks(arr, m) {
    // Binary Search -- Solve this in similar way like Sqrt problem
    let left = 0
    // Find the sum of elements of array
    let sum = 0
    let n = arr.length
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    let right = sum
    let answer = -1
    // Now we will apply binary search on 0 to right b'coz our value exists in between this.
    while (left <= right) {
        let mid = Math.floor(left + ((right - left) / 2))
        // Condition if mid is a possible solution until the loop exits
        if (isPossible(arr, n, m, mid)) {
            answer = mid
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return answer
}

const isPossible = (arr, n, m, mid) => {
    let studentCount = 1 // At start 1 student will be there
    let pageSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (pageSum + arr[i] <= mid) {
            pageSum += arr[i]
        }
        else {
            studentCount++
            if (studentCount > m || arr[i] > mid) {  // Student count is greater than m or if array element is greater than mid i.e 67 > 34 
                return false
            }
            pageSum = arr[i]
        }
    }
    return true
}

const students = 2
console.log(`Books allocated to student in ${allocateBooks([12, 34, 67, 90], students)}`)