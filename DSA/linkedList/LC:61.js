// Rotate List

// Given the head of a linked list, rotate the list to the right by k places.
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

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
            throw new Error("Linked list is empty or position is negative")
        }
        if(pos == 0){
            newNode.next = this.head
            this.head = newNode
        }
        else{
            let current = this.head
            let count = 0
            while(current && count < pos -1){
                current = current.next
                count ++
            }
            newNode.next = current.next
            current.next = newNode
        }
    }

    // Using iterative approach --> O(n) Time and O(1) space
    rotateLLByK(k=2){
        // Base case
        if(!this.head){
            return this.head
        }
        // Find the length
        let length = 1
        let tail = this.head
        while(tail.next){
            tail = tail.next
            length++
        }
        // if k == 0
        k = k % 10
        if (k == 0) {
            return this.head
        }
        // Find Pivot node and rotate
        let curr = this.head
        let position = length - k - 1
        for (let i = 0; i < position; i++) {
            curr = curr.next
        }
        // Now point the curr.next to null and tail.next to head
        let newHead = curr.next
        curr.next = null
        tail.next = this.head
        let result = []
        while (newHead) {
            result.push(newHead.value)
            newHead = newHead.next
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

const rotateList = new LinkedList()

rotateList.appendAtEnd(1)
rotateList.appendAtEnd(2)
rotateList.appendAtEnd(3)
rotateList.appendAtEnd(5)

rotateList.appendAtMiddle(4, 3)

rotateList.print()

console.log(rotateList.rotateLLByK())