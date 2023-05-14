function countVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    // convert the string to lowercase
    let lowerCaseStr = str.toLowerCase()

    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (vowels.includes(lowerCaseStr[i])) {
            count ++ 
        }
    }
    return count
}

const vowelCount = countVowels('Hello, how are you doing?')
console.log(vowelCount);