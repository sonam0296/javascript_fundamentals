let num = prompt('Enter the number: ')
let factorial = 1

if (num < 0) {
    alert('Uhh uhh!! Please enter a valid number')
} else if(num === 0) {
    alert('Factorial of 0 is 1')
} else{
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i
    }
    console.log(`Factorial of ${num} is ${factorial}`);
}