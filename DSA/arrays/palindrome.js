// How to check whether a string is palindrome or not ?

function isPalindrome(value){
    // Value can number as well as string
    const convertedStr = value.toString()
    let left = 0
    let right = convertedStr.length - 1
    while(left < right){
        if(convertedStr[left] != convertedStr[right]){
            return 'Not Palindrome'
        }
        left++
        right--
    }
    return 'Palindrome'
}

console.log(isPalindrome('aba'))