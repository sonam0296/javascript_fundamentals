/**
 * Remove Duplicates from Sorted List
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * 
 * Example 1:
    Input: head = [1,1,2]
    Output: [1,2]
 * 
 */

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    appendAtStart(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
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

    appendAtMiddle(value, pos){
        const newNode = new Node(value)
        if (!this.head || pos < 0) {
            throw new Error("LL is empty")
        }
        if (pos == 0) {
            newNode.next = this.head
            this.head = newNode
        }
        else{
            let current = this.head
            let count = 0
            while(current && count < pos - 1){
                current = current.next
            }
            newNode.next = current.next
            current.next = newNode
        }
    }

    deleteDuplicates(){
        // Keep track of nodes
        let current = this.head
        while(current && current.next){ // Loop till current & current.next is not null
            if(current.value === current.next.value){
                current.next = current.next.next
            }
            else{
                current = current.next
            }
        }
        let res = []
        while(this.head){
            res.push(this.head.value)
            this.head = this.head.next
        }
        return res
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

const duplicatesLL1 = new LinkedList()

duplicatesLL1.appendAtStart(1)
duplicatesLL1.appendAtMiddle(1, 1)
duplicatesLL1.appendAtEnd(2)
duplicatesLL1.appendAtEnd(3)
duplicatesLL1.appendAtEnd(3)

duplicatesLL1.print()

console.log(`After deleting duplicates : `, duplicatesLL1.deleteDuplicates());