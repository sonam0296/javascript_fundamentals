// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

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

    // reverse LL function
    /**
     * We can use two approach -->>> 
     *      1.) Iterative  => Two pointer -> O(n) / O(1)
     *      2.) Recursive  -> O(n) / O(n)
     */
    reverseLinkedList(){
        let current = this.head
        let prev = null
        while(current){
            let next = current.next // Keep value of current.next
            current.next = prev // Because reversing the LL
            prev = current
            current = next
            
        }
        let result = []
        while(prev){
            result.push(prev.value)
            prev = prev.next
        }
        console.log(result.join('->'))
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

linkedList.appendAtEnd(3)
linkedList.appendAtEnd(4)
linkedList.appendAtEnd(5)
linkedList.appendAtStart(2)
linkedList.appendAtStart(1)

linkedList.reverseLinkedList()

linkedList.print()