/**
 * Problem Definition
    Given an array nums, for each element in the array, find the next greater element. 
    The next greater element for an element x is the first greater element on the right side of x in the array. 
    If no such element exists, output -1 for that element.
 * 
    We try to solve the problem with brute force approach 
 */
function nextGreaterElBruteForce(nums){
    let result = new Array(nums.length).fill(-1)
    for(let i=0; i<nums.length - 1; i++){
        for(let j = i+1; j< nums.length; j++){
            if(nums[i] < nums[j]){
                result[i] = nums[j]
                break
            }
        }
    }
    return result
}

console.log("Brute Force -> ",nextGreaterElBruteForce([2, 1, 2, 4, 3]))

/**
 *  With Brute force --> 
 *  Time complexity is way more i.e O(n2) 
 */

//  It uses monotonic stack pattern to solve these types of problems

function nextGreaterElement(nums){
    /**
     * Step 1 :-
     * Initialize the stack & result array
     *  1.) create a empty stack to store the indices
     *  2.) create a array with the same length as nums and prefilled value as -1 b'coz we assume there is no greater ele till we find one 
     */

    let result = new Array(nums.length).fill(-1)
    let stack = []

    // Step 2 :- Iterate through the array
    for(let i=0; i< nums.length -1 ; i++){
        /* Step 3 :- 
           * Process each element
           * For each element, while the stack is not empty and the current element is greater than the element at the index 
            stored at the top of the stack, update the result for that index and pop the stack.
           * Push the current index onto the stack.
        */
        while(stack.length && nums[i] > nums[stack[stack.length - 1]]) { // stack[stack.length - 1] ==>> We get the peek or top elem
            result[stack.pop()] = nums[i]
        }
        stack.push(i)
    }
    return result
}

console.log(nextGreaterElement([2, 1, 2, 4, 3]))

// Time - O(n)