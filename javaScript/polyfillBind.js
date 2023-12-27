let name = {
    firstName: 'Sonam',
    lastName: 'Jha'
}

let printFullName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName + ' from ' + hometown + ' , ' + state)
}

// Using bind method directly
let printNameUsingBind = printFullName.bind(name, 'Mumbai')
printNameUsingBind("Maharastra")

// Create polyfill for bind
/** We will create same method like bind which creates a copy of the function 
 *  Step 1: 
 *      -- We need to 1st make our function i.e myBind() accessible everywhere so we have to use Function.prototype
 *  Step 2:
 *      -- Now when we call bind() method we return a function so we need to do the same thing 
 *  Step 3:
 *      -- Our bind() method then invokes printFullName() function when we call the printNameUsingMyBind 
 *          so will call printFullName() but our printFullName() function won't be available directly but we have access to 
 *          this keyword so we can use call() method.
 *  Step 4:
 *      -- As we need name parameter to print the names so need to pass in arguments using rest operator. The args here is a array.
 * 
 * ------ This is not a complete implementation if we have extra parameter's in printFullName() function it won't work 
 *  Step 5: 
 *      -- If we add hometown to printFullName.myBind() function we need to use the sliced array. But here param will be array
 *          & call method does not take [] as arguments so we will use apply().
 *  Step 6:
 *      -- Now what if we add arguments to our invoking method like printNameUsingMyBind(state) then it will not work.
 *          So the inner return function is our printNameUsingMyBind(state). As param is already an array and args2 is also an
 *          array so we need to concat both of them.
 */

Function.prototype.myBind = function(...args){  // Step 1
    let obj = this
    let param = args.slice(1) // Step 5
    return function(...args2){ // Step 2 & step 6
        obj.apply(args[0], [...param, ...args2]) // Step 3 & step 4 & Step 5
    }
}

/**
 * Now as we have created our myBind() function which will be accessible everywhere
 * 
 */

let printNameUsingMyBind = printFullName.myBind(name, 'Mumbai')
printNameUsingMyBind("Maharastra")

//  This is complete polyfill for bind method`