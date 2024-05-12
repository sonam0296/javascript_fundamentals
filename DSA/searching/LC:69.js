/**
 * Sqrt(x)
 * 
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
    You must not use any built-in exponent function or operator.
 * 
    Example 1:

    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2, so we return 2.

 */

function squareRt(x){
    // It will only return integer root
    return binarySqrtInteger(x)
}

console.log(`Square root of number is ${squareRt(10000)}`)

// Here we have single number but we know our num lies in between 0 to num and that will be a monotonic array so we can use binary search
function binarySqrtInteger(num){
    let left = 0
    let right = num
    let answer = -1
    while(left <= right){
        let mid = Math.floor(left + ((right-left)/2))
        // Check if mid square is equal to the num
        const square = mid * mid
        if (square === num) {
            return mid
        }
        else if(square < num){
            answer = mid
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return answer
}