let nameObj = {
    firstName: 'Sonam',
    lastName: 'Jha', 
}

// Instead of writing function inside object and borrowing them we can create a separate function
let printFullName = function(hometown, state){
    console.log(this.firstName + ' ' + this.lastName + " from " + hometown + ", " + state)
}

printFullName.call(nameObj, 'Mumbai Meri Jaan', 'Jai Maharastra')

let nameObj2 = {
    firstName: 'Mira',
    lastName: 'Jha'
}

//  How to use call method --- It is a function borrowing
//  If I want to add more parameters than we can do it by comma separated way
printFullName.call(nameObj2, 'Mumbai', 'Maharastra')

// Apply method -- It is same as call but the other parameters are in arraylist ([])
printFullName.apply(nameObj2, ['Delhi', 'Delhi'])

// Bind Method -- It actually creates a copy of the function. bind() method cannot be called like call(), apply() instead we need 
//              to call via a variable

// Bind method does not invoke the method directly instead it gives the copy of that same method which can be invoked later.
let fullName = printFullName.bind(nameObj, 'Mumbai', 'Maharastra' )
console.log(fullName)
fullName()

// NOTE::::::  For all the methods 1st parameter should be always the reference object.