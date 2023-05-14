let str = 'capitalize the first letter of each word!'

let splitStr = str.split(' ')

// loop through the splitStr and capitalize the 1st letter
for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].substring(1)
}
let capitalizeStr = splitStr.join(' ')
console.log(capitalizeStr);


