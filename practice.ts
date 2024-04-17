const num: Number = 10

console.log(num)

const user = {
    name: 'Sonam',
    age: 25
}

//  Describe object shape as well using interface

interface User{
    name: String,
    age: Number
}

const user1 : User = {
    age: 10,
    name: "Sonam"
}


function warpInArray(obj: string | string[]){
    if (typeof obj === "string") {
        return [obj]
    }
    return obj
}