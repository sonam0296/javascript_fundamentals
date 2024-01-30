function jsValueToJSON(val){
    let stringified = JSON.stringify(val)
    console.log(typeof val, typeof stringified)
    return stringified
}

let val = {name: 'Sonam', age: 24}
console.log(jsValueToJSON(val))