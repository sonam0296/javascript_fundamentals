const multiply = function(x, y){
    console.log(x * y)
}

// This is currying. 
/** We can execute currying using 2 ways :--
 *      1. Using bind() method
 *      2. Using closures
 */

// Here we are setting 1st parameter to this and we are setting the 2nd parameter to 2 i.e act as x as our function says multiplyBy2
const multiplyBy2 = multiply.bind(this, 2)
// And here we are calling the above function with 2nd parameter which is y i.e this will change accordingly
multiplyBy2(5)

const multiplyBy3 = multiply.bind(this, 3)
multiplyBy3(5)

// Using Closures

const multiplyUsingClosure = function (x){
    return function(y){
        console.log(x*y)
    }
}

const multiplyUsingClosureBy2 = multiplyUsingClosure(2)
multiplyUsingClosureBy2(4)