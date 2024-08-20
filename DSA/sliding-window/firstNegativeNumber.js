/**
 * First negative in every window of size k -->>>
 * 
 * Given an array A[] of size N and a positive integer K, find the first negative integer for each and every window(contiguous subarray) of size K.
 * 
 * Input : 
    N = 5
    A[] = {-8, 2, 3, -6, 10}
    K = 2
    Output : 
    -8 0 -6 -6
    Explanation :
    First negative integer for each window of size k
    {-8, 2} = -8
    {2, 3} = 0 (does not contain a negative integer)
    {3, -6} = -6
    {-6, 10} = -6
 * 
 */

function bruteForce(arr, k) {
    let list = []
    for(let i =0; i<arr.length -k; i++){
        let foundNegative = false
        for(let j = i; j<i+k; j++){
            if(arr[j] < 0){
                list.push(arr[j])
                foundNegative = true
                break
            }
        }
        if(!foundNegative){
            list.push(0)
        }
    }
    return list
}

console.log(bruteForce([12, -1, -7, 8, -15, 30, 16, 28], 3))

function firstNegativeNum(arr, k){
    let i = 0
    let j = 0
    let list = []
    let res = []
    while(j < arr.length){
        if(arr[j] < 0){
            list.push(arr[j])
        }
        if(j-i + 1 < k){
            j++
        }
        else if(j-i+1 == k){
            if(list.length == 0){
                res.push(0)
            }
            else { // return 1st elem
                res.push(list[0])
            }
            // Slide the window but before that adjust the list
            console.log(arr[i], 'list', list[0])
            if(arr[i] == list[0]){
                list.shift()
            }
            i++
        }
    }
    return list // we can also return all the result value i.e [-8, 0, -6, -6] 
}

console.log(firstNegativeNum([-8, 2, 3, -6, 10], 2))
