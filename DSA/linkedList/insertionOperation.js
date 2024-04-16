// How to create a Linked List ? 
/**
 * Step 1 : Create a `Node` class as each node consists of =====> data and next pointer.
 * Step 2 : Create a `Linked List` class to manage all the operations like ===> insertion, deletion, traversal
 * 
 */


class Node {
    constructor(value) {
        // each node contains data and next
        this.value = value
        this.next = null  // Reference to next value will be null
    }
}

class LinkedList {
    constructor() {
        // LL will have head and initially it is null, because LinkedList is empty at 1st
        this.head = null  // Points to 1st node, initially null
    }

    // Insert new node in Linked list at begining
    insertionAtBeginning(value) {
        let newNode = new Node(value)  // create a node
        newNode.next = this.head // set the next pointer of new node to head  -----> that's why our o/p ===> 37 -> 99 -> 22 as 37 was added at last
        this.head = newNode // head will point to new node
    }

    // Insert new node in Linked List at the end
    append(value) {
        const newNode = new Node(value)
        // Check if head is null
        if (!this.head) {
            this.head = newNode  // If list is empty, head will point to newNode
        }
        else {
            let current = this.head
            while (current.next) { // Loop till current.next is null
                current = current.next
            }
            current.next = newNode // At first current.next is null so will assign newNode to current.next
        }
    }

    // Insert new node in middle of linked list
    insertInMiddle(value, position) {
        let newNode = new Node(value) // create new node
        let current = this.head // store head and traverse the LL
        let count = 0
        while (current && count < position - 1) {
            current = current.next
            count++
        }
        if (!current) {
            console.error("Position out of bounds");
            return;
        }
        newNode.next = current.next // update next pointer of new node
        current.next = newNode // update the next pointer of previous node
    }

    // Print elements of list
    print() {
        let current = this.head
        let results = []
        while (current) {
            results.push(current.value)
            current = current.next
        }
        console.log(results.join(' -> '))
    }
}

const linkedList = new LinkedList()

// Insert at beginning
linkedList.insertionAtBeginning(22)
linkedList.insertionAtBeginning(99)
linkedList.insertionAtBeginning(37)

// Append values
linkedList.append(1)
linkedList.append(2)
linkedList.append(4)

// Insertion at middle
linkedList.insertInMiddle(100, 4)
linkedList.insertInMiddle(30, 2)
linkedList.insertInMiddle(57, 8)
linkedList.insertInMiddle(40, -1)


linkedList.print()