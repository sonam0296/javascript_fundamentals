// ======================================================
//  Without HOC(Higher Order Function)
// ======================================================

const radius = [3, 4, 2, 6]

const calculateArea = function(radius){
    let output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output
}

console.log(calculateArea(radius));

const calculateCircumference = function(radius){
    let output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i])
    }
    return output
}

console.log(calculateCircumference(radius));

const calculateDiameter = function(radius){
    let output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i])
    }
    return output
}

console.log(calculateDiameter(radius));

// In the above code we have so many duplicacy we are using the repeated code. Instead we can write the same code with HOC function.

// ======================================================
//  With HOC(Higher Order Function)
// ======================================================

const area = function(radius){
    return Math.PI * radius * radius
}

const circumference = function(radius){
    return 2 * Math.PI * radius
}

const diameter = function(radius){
    return 2 * radius
}

// area, circumference and diameter are the callback function which is passed inside the logic in calculate function

const calculate = function(arr, logic){   // calculate function is a higher order function 
    let output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]))
    }
    return output
}

console.log(calculate(radius, area))
console.log(calculate(radius, circumference))
console.log(calculate(radius, diameter))

// As we can see with Higher order function the code is optimized and here we have passed a function as an argument to another function

// map() is also a higher order function and it can replace the calculate function. It is given by JS to us and we have written
// our implementation of code in the calculate function
console.log(radius.map(area))

// we can write the code similar to line 73 

//  Array.prototype.calculate function makes available the array to all the functions.
//  when we put something on to prototype it appears in all the arrays so that means just like our map we can do for calculate
Array.prototype.calculate = function(logic){   
    let output = []
    for (let i = 0; i < this.length; i++) {   // this refers to radius array
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.calculate(area)) // this looks similar to line 73 i.e map 