// Palindrome Linked List

// Given the head of a singly linked list, return true if it is a 
// palindrome or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    appendAtStart(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    appendAtEnd(value) {
        const newNode = new Node(value)
        if (!this.head) {
            newNode.next = this.head
            this.head = newNode
        }
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            newNode.next = null
            current.next = newNode
        }
    }

    appendAtMiddle(value, position) {
        const newNode = new Node(value)
        if(!this.head || position < 0){
            throw new Error("LL is empty");
        }
        else{
            let current = this.head
            let count = 0
            while(current && count < position - 1){
                current = current.next 
                count ++
            }
            newNode.next = current.next
            current.next = newNode
        }
    }

    /**
     * 1.) It uses Two-pointer (fast and slow) to find the middle element
     * 2.) Reversing the second half LL
     * 3.) Check if palindrome or not
     * 
     * Time --> O(n) and Space --> O(1)
     */

    isPalindrome(){
        if(!this.head && !this.head.next){
            return true // Empty or single-node list is considered a palindrome
        }
        let slow = this.head
        let fast = this.head
        // Find middle i.e(slow)
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next
        }

        // Reverse the 2nd half list --- Logic same as reverse linked list i.e LC: 206
        let prev = null
        while(slow){  // as slow is head only
            let next = slow.next
            slow.next = prev
            prev = slow
            slow = next
        }

        // Check if palindrome
        let left = this.head;
        let right = prev
        while(right){ // till prev is there
            if(left.value !== right.value){
                return false
            }
            left = left.next
            right = right.next
        }
        return true
    }

    /**
     * We can solve the above question with converting the linkedList to array ===> 
     *  
     * 
     * Here Time===> O(n) and Space ====> O(n)
     */

    isPalindromeArr(){
        if(!this.head && !this.head.next){
            return true // Empty or single-node list is considered a palindrome
        }
        // Step 1: Convert the linked list into an array
        let nums = []
        let current = this.head
        while(current){
            nums.push(current.value)
            current = current.next
        }
        // Now using array logics to check if it is palindrome or not
        let left = 0;
        let right = nums.length - 1
        while(left < right){ // should meet at same point
            if(nums[left] !== nums[right]){
                return false
            }
            left++
            right--
        }
        return true
    }

    print() {
        let current = this.head
        let result = []
        while (current) {
            result.push(current.value)
            current = current.next
        }
        console.log(result.join('->'))
    }
}

const linkedList = new LinkedList()

linkedList.appendAtStart(2)
linkedList.appendAtStart(1)
// linkedList.appendAtEnd(2)
linkedList.appendAtEnd(1)

linkedList.appendAtMiddle(2, 2)

linkedList.print()

console.log("Is Palindrom => " ,linkedList.isPalindrome())
// console.log("Is Palindrom With Array Approach => " ,linkedList.isPalindromeArr())