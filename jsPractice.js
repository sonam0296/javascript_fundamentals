/**
 * 1. BASED ON SCOPED AND IIFE
 */

var x = 10;
console.log('Before Function');
(function () {
    console.log(x, 'Inside function before if')
    if (false) {
        var x = 5
    }
    console.log(x, 'Inside function')
    x = 12
})()
console.log(x, 'Outside function')
/**
 * 2. 
 */
function show() {
    {
        var x = 10
        var y = 12
    }
    console.log(x, y, "INSIDE SHOW FUNCTION")
}
show()

console.log("USING IIFE ")
// Implement the above function such that x & y should be blocked scope using only var without using let or const
function show1() {
    {
        (function () {
            var x = 10
            var y = 12
        })();
    }
    console.log(x, y, 'USING IIFE --> Immediately Invoked Function Expression') // This line will give us an error now.
}
// show1()
/** 3.  Call function without using parantheses*/

function abc() {
    console.log('abc')
}

let obj = {
    name: 'Sonam',
    show: function () {
        console.log('JS is ♥️')
    }
}

// 1st way to do this
abc``
obj.show``
// 2nd way to add new and by doing this our function does not need ()
// New keyword invokes the function so we don't need to explicitly invoke the function
new abc
new obj.show

//  OBJECT CALLING AND COMPARING

let obj1 = { a: 1 }
let obj2 = { a: 1 }
let obj3 = obj1

console.log(obj1 == obj2, obj1 === obj2, obj1 === obj3)

//  Function Expressions are not hoisted like function declaration or function statement

// If I try to access this variable expression() before it is initialized it will give error
// console.log(expression())
var expression = function () {
    console.log("expression")
}


// Writing Polyfill for `new` keyword

function myNew(obj, ...args) {
    // create a new object
    let newObj = {}
    // set prototype tp newObj
    newObj.__proto__ = obj.prototype
    // Bind 'this', execute contructor
    const result = obj.apply(newObj, args)
    // return newly created object
    return result instanceof Object ? result : newObj
}

function Person(name, age) {
    this.name = name;
    this.age = age
}

Person.prototype.showMyName = function () {
    console.log(`My name is ${name} and I'm ${age} years old.`)
}

const res = myNew(Person, "Sonam", '25')

console.log(res.showMyName, '::::RES')


// Given the following DOM structure:

{/* <ul id="list-start" >
  <li>Sonam</li>
  <li>Resham</li>
  <li>Meera</li>
</ul> */}

function usingEventPropagation(e) {
    console.log(e.target, "e.target")
    if (e.target && e.target.nodeName === "LI") {
        console.log(`${e.target.textContent} is clicked`)
    }
}

let list = document.getElementById("list-start")
console.log(list)

if (list) {
    list.addEventListener('click', usingEventPropagation)
}

// Convert string to integer
function convertStringToInteger(string){

	const object = {
  	"0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9
  }
  let result = 0
  for(let i=0; i<string.length; i++){
    const digit = object[string[i]]
    console.log(result, result * 10, digit, 'result * 10')
    result = result * 10 + digit
    /* console.log(result) */
  }
  
}

convertStringToInteger("1234")
