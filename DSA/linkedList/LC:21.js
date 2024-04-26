/**Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4] */

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
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            newNode.next = null
            current.next = newNode
        }
    }

    appendAtMiddle(value, pos) {
        const newNode = new Node(value)
        if (!this.head) {
            throw new Error("Linked list is empty")
        }
        if (pos === 0) {
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

    mergeSortedList(l1, l2){
        // Create dummy list
        let dummy = new Node()
        // keep track of dummyNode
        let current = dummy
        // Loop till sortedList1 and sortedList2 is null
        while (l1 && l2) {
            // check if values are less than or greater and insert in current
            if (l1.value < l2.value) {
                current.next = l1
                l1 = l1.next
            }
            else{
                current.next = l2
                l2 = l2.next
            }
            // Update current pointer by 1
            current = current.next
        }
        // Check if l1 or l2 still have any values left
        if (l1) {
            current.next = l1
        }
        else if (l2) {
            current.next = l2
        }
        let result = []
        while (dummy.next) {
            result.push(dummy.next.value)
            dummy = dummy.next
        }
        return result
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

const mergeSortedLL = new LinkedList()
const sortedList1 = new LinkedList()
const sortedList2 = new LinkedList()

sortedList1.appendAtStart(1)
sortedList1.appendAtMiddle(2, 1)
sortedList1.appendAtEnd(4)

console.log("List 1: ");
sortedList1.print()

sortedList2.appendAtStart(1)
sortedList2.appendAtMiddle(3, 1)
sortedList2.appendAtEnd(4)

console.log("List 2: ");
sortedList2.print()

console.log("Merge Sorted List", mergeSortedLL.mergeSortedList(sortedList1.head, sortedList2.head))

