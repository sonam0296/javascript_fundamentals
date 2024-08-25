//Find the factorial of given number ?

function factorial(n){
    // Base case
    let result = n
    if(n < 0) return 'Number should be greater than 0'
    if(n==0 || n ==1){
        return 1
    }
    // Using while loop
    while(n >1){
        n--
        result *= n
    }
    return result

    // Using recursion 
    return n * factorial(n-1)
}

console.log(factorial(4))