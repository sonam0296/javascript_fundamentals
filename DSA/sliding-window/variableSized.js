/**
 * 
 * Sliding window is a technique/pattern useful to solve problems involving subarrays or substring in a larger array or string
 * 
 *  1.) Variable Sized : 
 *      Eg- Find the length of the longest substring without repeating characters
 */

// Solve using hashset
function longestSubtring(s){
    // Using two pointer and hashset
    let set = new Set()
    let left = 0
    let maxLength = 0
    for(let right=0; right<s.length; right++){
        // If char already there then delete
        if(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}

console.log(longestSubtring("abcabcbb"))


// Solcve using hash map
function lengthOfLongestSubstring(str){
    // Using hash map and two pointer
    let map = new Map()
    let left = 0
    let maxLength = 0
    for(let right = 0; right<str.length; right++){
        // Check if char is repeated
        if(map.has(str[right])){
            left = Math.max(left, map.get(str[right]) + 1) 
        }
        // console.log(left)
        map.set(str[right], right)
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}

console.log(lengthOfLongestSubstring("pwwkew"))

// Time - O(n)
// Space - O(n)