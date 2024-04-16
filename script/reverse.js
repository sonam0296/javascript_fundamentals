// Reverse a string using 3 methods 

let string = 'Heyyy!! How are youalldoing ??'

//  <<<<<<<=========================== Using built-in methods ===========================>>>>>>>
function reverseString(str) {
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

function reverseStrUsingFor(str) {
    // STEP 1 => create an empty string that will store the new created string
    let reversedStr = ''
    // STEP 2 => Create For Loop 
    /* 
        Starting point of loop will be str.length -1 which corresponds to the last character of string, 
        As long as i is greater than or equals to 0 the loop will go on, 
        decrement i after each iteration.
    */
    for (let index = str.length - 1; index >= 0; index--) {
        reversedStr = + str[index]
    }
    console.log(reversedStr);
    return reversedStr
}

reverseStrUsingFor('Reverse')


//  <<<<<<<=========================== Using Recursion ===========================>>>>>>>

function reverseStrUsingRecursion(str) {
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

let arr = [1, [1, 2], [3, 4, 6], [10, [2, 5]], 9]


function flattenArray(arr) {
    let flattedArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattedArr = flattedArr.concat(flattenArray(arr[i]))
        }
        else {
            flattedArr.push(arr[i])
        }
        console.log(flattedArr)
    }
    return flattedArr
}

flattenArray(arr)

/* Using Built in method */
console.log(arr.flat(2))



function binarySearch(arr, x) {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
        // Find mid element
        let m = Math.floor((lo + hi) / 2);
        // Check if equal to target
        if (arr[m] === x) {
            return m;
            // Reduce array search space by half
        } else if (arr[m] < x) {
            lo = m + 1;
        } else {
            hi = m - 1;
        }
    }
    // Item not found
    return -1;
}

let arr1 = [1, 3, 5, 7, 9, 11, 14, 18, 22];
console.info("Item was found at index: " + binarySearch(arr1, 22))


function memo(func){
	let cache = {}
  
  return function(x){
  console.log(cache)
  	if(x in cache) return cache[x]
    return cache[x] = func(x)
  }
  console.log(cache)
}

let fib = memo(function(num){
	if(num === 0){
  return 0
  }
  else if(num === 1){
  return 1
  }
  else{
  	return fib(num-1) + fib(num-2)
  }})


console.log(fib(10))


function fibonacciNum(num){
	let n1 = 0; let n2 = 1; let nextFib
	for(let i=0; i<=num; i++){
  console.log(n1)
  nextFib = n1 + n2
  n1 = n2
  n2 = nextFib
  }
}


console.log(fibonacciNum(9))


function mapString(str){
	let map = {}
	str.split('').forEach(st=>{
  	map[st] = (map[st] || 0) + 1
  })
  console.log(map)
}

mapString('SonamJha')