function counter(){
    let a = 0
    function updateCounter(){
        a++
        // console.log(a)
    }
    return updateCounter
}

const count = counter()
count()
count()
count()
count()
count()


// Print the value till 5 after each seconds value
for(var i=1; i<=5; i++){
    setTimeout(()=>{
        console.log(i);
    }, i * 1000)
}

//  with var keyword the o/p is not as expected because of the asynchronous nature of setTimeout() 
// it will gives us o/p as length + 1 ie. if loop is running till 5 then it will give o/p = 6, if 10 then => 11

// To fix this issue we should use let keyword instead

// As let creates a block scope so whenever above code executes it creates a new block for each with updated i value
//  With var it is a global scope so it will update the existing value