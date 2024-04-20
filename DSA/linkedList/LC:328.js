// Odd Even Linked List =>

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

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

    appendAtStart(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    appendAtEnd(value){
        const newNode = new Node(value)
        if(!this.head){
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

    oddEven(){
        // Base case for head, head.next and head.next.next
        if(!this.head || !this.head.next || !this.head.next.next){
            return null
        }
        // Step 0:
        let evenHead = this.head.next // this will be constant 2nd node will be evenHead
        let evenNode = evenHead
        let oddNode = this.head
        while(oddNode.next && evenNode.next){  // We are moving oddNode by 1 and even node by 1
            oddNode.next = oddNode.next.next
            oddNode = oddNode.next
            evenNode.next = evenNode.next.next
            evenNode = evenNode.next
        }
        oddNode.next = evenHead
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

const linkedList = new LinkedList()

linkedList.appendAtStart(3)
linkedList.appendAtStart(2)
linkedList.appendAtStart(1)

linkedList.appendAtEnd(4)
linkedList.appendAtEnd(5)

linkedList.print()

console.log(linkedList.oddEven())