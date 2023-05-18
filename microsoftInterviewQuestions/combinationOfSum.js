// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// We can use backtrack algorithm 

// combinationSum function takes 2 parameters 1st represent the number of elements in each combination & 2nd the target sum.
function combinationSum(k, n) {
    const combinations = []
    backtrack([], 1, k, n)
    return combinations

    function backtrack(combinationArray, start, count, target){
        if (target === 0 && count === 0) {
            combinations.push([...combinationArray])
            return
        }

        if (target < 0 || count === 0) {
            return
        }

        for (let i = start; i <= 9; i++) {
            combinationArray.push(i)
            backtrack(combinationArray, i+1, count - 1, target - i)
            combinationArray.pop()
        }
    }
}

const k = 3
const n = 9

console.log(combinationSum(k, n));

// Time complexity = O(k*(2^n))  == >> n is size of array & k is average length 