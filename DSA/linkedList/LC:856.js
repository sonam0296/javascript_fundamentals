// 876. Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

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

    // Get middle node 

    /**
     * Here we are using two pointer approach ---> O(n) & O(1)
     *   1.) Will create slow and fast which will start from head i.e 1st node
     *   2.) Loop till fast and fast.next is null and increment the slow pointer by 1 and fast by 2. ---> In this way by the time fast reach at end or last node slow will reach at middle
     *   3.) Return middle node or we can return also return the subsequent nodes 
     */  

    middleNode(){
        let slow = this.head
        let fast = this.head
        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }
        let result = []
        while(slow){
            result.push(slow.value)
            slow = slow.next
        }
        console.log(result)
        return result
    }

    print() {
        let current = this.head
        let results = []
        while (current) {
            results.push(current.value)
            current = current.next
        }
        console.log(results.join('->'))
    }
}

const linkedList = new LinkedList()
linkedList.appendAtEnd(1)
linkedList.appendAtEnd(2)
linkedList.appendAtEnd(3)
linkedList.appendAtEnd(4)
linkedList.appendAtEnd(5)

linkedList.middleNode()

linkedList.print()
