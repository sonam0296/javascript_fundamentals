/**
 * Delete the Middle Node of a Linked List

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 
*/

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    appendAtEnd(value){
        const newNode = new Node(value)
        if (!this.head) {
            newNode.next = this.head
            this.head = newNode
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            newNode.next = null
            current.next = newNode
        }
    }

    //  Will be using same logic as middle node deletion i.e Two pointer Approach ===>>> O(n) Time & O(1) Space
    deleteMiddleNode(){
        // Base case
        if(!head.next){
            return null
        }
        // Slow and fast ,,, slow will move by 1 & fast will move by 2
        let slow = this.head
        let fast = this.head
        // Will keep track of prev slow
        let prevSlow = null
        while(fast && fast.next){   // check fast & fast.next is not null
            fast = fast.next.next
            prevSlow = slow
            slow = slow.next
        }
        // Once fast reach null will update the prevSlow.next to its next
        prevSlow.next = prevSlow.next.next
        let result = []
        while(this.head){
            result.push(this.head.value)
            this.head = this.head.next
        }
        return result
    }

    print(){
        let current = this.head
        let result = []
        while(current){
            result.push(current.value)
            current = current.next
        }
        console.log(result.join('->'))
    }
}

const linkedList = new LinkedList()

linkedList.appendAtEnd(1)
linkedList.appendAtEnd(3)
linkedList.appendAtEnd(4)
linkedList.appendAtEnd(7)
linkedList.appendAtEnd(1)
linkedList.appendAtEnd(2)
linkedList.appendAtEnd(6)

linkedList.print()

console.log("After deleting middle node: ", linkedList.deleteMiddleNode())