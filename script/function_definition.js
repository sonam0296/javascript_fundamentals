// a();  // this will run w/o error 
// b();  // this will through an error because var b  is treated as a variable so its value will be undefined till JS hits line 9
// Function Statement AKA  Function Declaration
function a(){
    console.log('a called');
}
a();
// Function Expression
var b = function (){
    console.log('b called');
}
b();
// ----------------->>> Diff betn function statement & function expression is hoisting <<<----------------//

// ----------------->>><<<----------------//
// Function Declaration aka Function Statement
    // It is same as function statement both are same thing. 

// ----------------->>><<<----------------//

// Anonymous Function  =====> Function without a name
// function (){
//     console.log('Anonymous Function');
// }

// the above function gives a syntax error because according to ES evry function should have a name.
// But these functions are used as values. As function can be treated as values in JS. As we see the code for function expression.
// we have assigned anonymous function to a variable b.

// ----------------->>><<<----------------//
// Named Function Expressions

// var c = function xyz(){
//     console.log('this whole expression is a named function');
//     // to access xyz() 
//     console.log(xyz())
// }

// c();

// Named function is same as function expression but with a name function i.e xyz() is named function but we can't call xyz() 
// as it is block scope.
// xyz();

// ----------------->>><<<----------------// 

// Difference between paramaters & Arguments ?
var d = function (paramater1, paramater2){  // paramater1, paramater2 are parameters
    console.log('b called');
}
d(1, 2); // 1, 2 are arguments 

// ----------------->>><<<----------------// 

// First Class Functions ===>>> The ability to use functions as values or pass this functions as arguments or return from another function.
// First Class Citizens AKA First Class Functions

var firstClassFunction = function (){
    return function returnFuntionWhenCalledVariable(){ 
            // returned a function when called
    }
}

console.log(firstClassFunction());

var firstClassFunctionPassedAsArg = function (params){
    console.log('passed anonymous or any named function as argument', params);
}

firstClassFunctionPassedAsArg(function (){

});

// ----------------->>><<<----------------// 

// Arrow Functions
// Same statement, declarations, expression can be done with Arrow functions as well.