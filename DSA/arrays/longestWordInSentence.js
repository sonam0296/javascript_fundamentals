/**
 * 
 * Program to find longest word in a given sentence ?
 * 
 * Algorithm Challenge
    Return the length of the longest word in the provided sentence.
    Your response should be a number.
 */

/**
 * We can solve this by three ways -> 
 * 
 * 1.) split('') & for of loop
 * 2.) Using split() & sort()
 * 3.) Using reduce()
 */

const findLongestWord = (str) => {
    // 1.) Using split('') & for of loop
    if (str == '') {
        return 0
    }

    const splittedArr = str.split(' ')
    let longestWord = 0
    for (const arr of splittedArr) {
        if (longestWord < arr.length) {
            longestWord = arr.length
        }
    }
    return longestWord
}
console.log('Longest word using split() & for of loop => ', findLongestWord("May the force be with you")) // May the force be with you // The quick brown fox jumped over the lazy dog


function findLongestWordUsingSort(str) {
    // Using split() & sort()
    const longestWord = str.split(' ').sort((a, b) => { return b.length - a.length })
    return longestWord[0].length
}

console.log('Longest word using sort() => ', findLongestWordUsingSort("What if we try a super-long word such as otorhinolaryngology"))