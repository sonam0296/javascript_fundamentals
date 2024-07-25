/**
 * 340.Longest Substring with At Most K Distinct Characters
 *  Description :-
    Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.
    Example 1:
    Input: s = "eceba", k = 2
    Output: 3
    Explanation: The substring is "ece" with length 3.

    Example 2:
    Input: s = "aa", k = 1
    Output: 2
    Explanation: The substring is "aa" with length 2.
 */

function longestSubstringKDistinct(s, k) {
    // Using hash map 
    let map = new Map()
    let left = 0
    let maxLength = 0
    // Loop from 0 till length
    for (let right = 0; right < s.length; right++) {
        // Set the right values in map
        map.set(s[right], (map.get(s[right]) || 0) + 1)
        console.log(map)
        // Loop till map.size is less than k
        while (map.size > k) {
            map.set(s[left], map.get(s[left]) - 1)
            if (map.get(s[left]) == 0) {
                map.delete(s[left])
            }
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}

console.log(longestSubstringKDistinct("aa", 1))