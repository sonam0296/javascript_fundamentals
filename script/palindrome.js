let num = 'nayan'
let temp = num
let reverse = 0

while(temp>0){
    let digit = temp % 10
    reverse = reverse * 10 + digit
    temp = Math.floor(temp / 10)
} 
console.log(reverse, num);
if (reverse === num) {
    console.log('Palindrome');
} else {   
    console.log('Not Palindrome');
}


// =====================> Common Function to check Palindrome for both (Number & string) <=====================

function isPalindromeOrNot(input){
    // convert the input in to String
    let convertedInput = String(input)
    let reverse = 0
    let temp = convertedInput.length - 1
    // loop the str
    while (temp > reverse){
        if (convertedInput[reverse] !== convertedInput[temp]) {
            return 'Not Palindrome' // false
        }
        reverse++
        temp--
    }  
    return 'Palindrome' // true
}

console.log(isPalindromeOrNot(10101));
console.log(isPalindromeOrNot('tat'));
console.log(isPalindromeOrNot(100));
console.log(isPalindromeOrNot('fat'));