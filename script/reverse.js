// Reverse a string using 3 methods 

let string = 'Heyyy!! How are youalldoing ??'

//  <<<<<<<=========================== Using built-in methods ===========================>>>>>>>
function reverseString(str){
    // 1st method using split()
    let splitString = str.split('')
    // 2nd method using reverse()
    let reverseString = splitString.reverse()
    // 3rd method using join()
    let joinString = reverseString.join('')
    console.log(joinString);
    return joinString
}
reverseString(string)

//  <<<<<<<=========================== Using without built-in methods ===========================>>>>>>>

function reverseStrUsingFor(str){
    // STEP 1 => create an empty string that will store the new created string
    let reversedStr = ''
    // STEP 2 => Create For Loop 
    /* 
        Starting point of loop will be str.length -1 which corresponds to the last character of string, 
        As long as i is greater than or equals to 0 the loop will go on, 
        decrement i after each iteration.
    */
   for (let index = str.length - 1; index >= 0; index--) {
        reversedStr =+ str[index]
   }
   console.log(reversedStr);
   return reversedStr
}

reverseStrUsingFor('Reverse')


//  <<<<<<<=========================== Using Recursion ===========================>>>>>>>

function reverseStrUsingRecursion(str){
    if (str === '') {
        return '';
    } else {
        return reverseStrUsingRecursion(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseStrUsingRecursion('Hello'));

// const reverseString = (str) => {
//     let formatStr = str.split(' ').map(m=>(m.length > 5 ? m.split('').reverse().join('') : m))
//     console.log(formatStr);
// }

// reverseString('Hello Sonam! How are you?')
