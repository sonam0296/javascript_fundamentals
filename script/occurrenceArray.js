const arr = [1,2,3,2,1,3,5,2,4]
const obj = {}

for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    console.log(ele);
    if (obj[ele]) {
        obj[ele]++
    }
    else{
        obj[ele] = 1
    }
}

for (const key in obj) {
    if (obj[key] === 1) {
        delete obj[key]
    }
}

console.log(obj);