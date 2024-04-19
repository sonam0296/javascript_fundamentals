// Linked List Cycle II

// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.

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
        if(!this.head){
            newNode.next = this.head
            this.head = newNode
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            newNode.next = current.next
            current.next = newNode
        }
    }
    
    // Floyd's Tortoise and Hare Algo
    detectCycle(){
        let slow = this.head
        let fast = this.head
        let hasCycle = false
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
            if(slow === fast){
                hasCycle = true
                break;
            }
        }
        // return -1
        if(!hasCycle) return null

        slow = this.head
        while(slow !== fast){
            slow = slow.next
            fast = fast.next
        }
        return slow
    }

    // findCycleStart(){
    //     let slow = this.head
    //     let fast = this.head
    //     while(slow !== fast){
    //         slow = slow.next
    //         fast = fast.next.next
    //     }
    //     let current = this.head
    //     while(current !== slow){
    //         current = current.next
    //         slow = slow.next
    //     }
    //     return current

    // }

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
linkedList.appendAtEnd(2)
linkedList.appendAtEnd(3)
linkedList.appendAtEnd(4)

linkedList.print()

// Create a cycle for testing
linkedList.head.next.next.next.next = linkedList.head.next;

linkedList.detectCycle();
console.log("Cycle starts at:", linkedList.detectCycle() ? linkedList.detectCycle().value : "No cycle");