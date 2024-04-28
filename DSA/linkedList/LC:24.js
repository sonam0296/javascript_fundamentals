/**
 * Swap Nodes in Pairs
 *  Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 * 
 * Example 1:
    Input: head = [1,2,3,4]
    Output: [2,1,4,3]
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
        if(pos == 0){
            newNode.next = this.head
            this.head = newNode
        }
        else{
            let current = this.head
            let count = 0
            while (current && count < pos - 1) {
                current = current.next
                count++
            }
            newNode.next = current.next
            current.next = newNode
        }
    }

    swapPair(){
        // Create a dummyNode
        let dummyNode = new Node(0)
        dummyNode.next = this.head
        let prev = dummyNode
        let current = this.head
        // Loop till current & current.next
        while(current && current.next){
            // Save pointers
            let nextPtrs = current.next.next
            let secondPtrs = current.next
            secondPtrs.next = current
            current.next = nextPtrs
            prev.next = secondPtrs

            // Update pointers
            prev = current
            current = current.next
        }
        let result = []
        while(dummyNode.next){
            result.push(dummyNode.next.value)
            dummyNode = dummyNode.next
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

const swapPairLL = new LinkedList()

swapPairLL.appendAtEnd(2)
swapPairLL.appendAtStart(1)
swapPairLL.appendAtEnd(4)
swapPairLL.appendAtMiddle(3, 2)

swapPairLL.print()

console.log('After swapping the LL: ', swapPairLL.swapPair())