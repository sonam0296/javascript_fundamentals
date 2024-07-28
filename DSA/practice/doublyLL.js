class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // Traversal -- O(n)
    print() {
        let current = this.head
        console.log(current)
        let result = []
        while (current) {
            // console.log(current.value, ':::val')
            result.push(current.value)
            current = current.next
        }
        console.log(result)
        console.log(result.join('<->'))
    }

    // Insertion at start - O(1)
    insertAtStart(value) {
        let newNode = new Node(value)
        if (!this.head) {
            // If LL is empty then pointer of head and tail will be newNode
            this.tail = newNode
            this.head = newNode
        }
        else {
            // Head & its previous node will be new node and newNode next will be head 
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    // Inserting at End --- O(n)
    insertAtEnd(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            newNode.next = null
            newNode.prev = current
            current.next = newNode
        }
    }

    // Insertion at any position --- O(n)
    insertAtAnyPosition(value, pos) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            let current = this.head
            let count = 0
            while (current && count < pos - 1) {
                current = current.next
                count++
            }
            newNode.next = current.next
            newNode.prev = current
            current.next = newNode
        }
    }

    // Deletion at start -- O(1)
    deleteAtStart() {
        if (!this.head) {
            throw new Error('LL is empty')
        }
        this.head = this.head.next
        this.tail = this.tail.next
    }

    // Deletion at End --- O(n)
    deleteAtEnd() {
        if (!this.head) {
            throw new Error('LL is empty')
        }
        let current = this.head
        // 1.) way is to do in below way 
        // while(current.next){
        //     current = current.next
        // }
        // current.prev.next = null
        // 2.) way is to 
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }

    // Deletion at Any position --- O(n)
    deleteAtAnyPos(pos) {
        if (!this.head) {
            throw new Error('LL is empty')
        }
        let current = this.head
        let count = 0
        while (current && count < pos - 1) {
            current = current.next
            count++
        }
        current.next = current.next.next
        current.next.next.prev = current
    }

    // Searching node in Double LL
    searchNode(node) {
        if (!this.head) {
            throw new Error('LL is empty')
        }
        let current = this.head
        let position = 0
        while (current.next) {
            if (current.value == node) {
                console.log(`Node => ${node} is found at position => ${position}`)
                return position
            }
            current = current.next
            position++
        }
    }

    // Reverse a doubly LL
    reverse() {
        if (!this.head) {
            throw new Error('The linked list is empty');
        }

        let current = this.head;
        let temp = null;

        while (current) {
            // Swap the next and prev pointers
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            // Move to the next node (which is the previous node due to the swap)
            current = current.prev;
        }

        // Adjust head pointer to the new front of the list
        if (temp) {
            this.head = temp.prev;
        }
    }
}

const doublyLinkList = new DoublyLinkedList()

doublyLinkList.insertAtStart(4)
doublyLinkList.insertAtStart(3)
doublyLinkList.insertAtStart(2)
doublyLinkList.insertAtStart(1)

doublyLinkList.insertAtEnd(5)
doublyLinkList.insertAtEnd(6)
doublyLinkList.insertAtEnd(7)
doublyLinkList.insertAtEnd(8)

doublyLinkList.insertAtAnyPosition(3.5, 3)
doublyLinkList.insertAtAnyPosition(0, 5)

doublyLinkList.deleteAtStart()

doublyLinkList.deleteAtEnd()

doublyLinkList.deleteAtAnyPos(4)

doublyLinkList.searchNode(5)

doublyLinkList.print()
doublyLinkList.reverse()  // This function works in other file but here it is not printing

console.log("Reversed List:");
