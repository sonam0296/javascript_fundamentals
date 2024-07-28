class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null
    }

    // Access / traversal --- O(n)
    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let results = [];
        do {
            results.push(current.value);
            current = current.next;
        } while (current !== this.head);
        console.log(results.join('->'));
    }

    // Insertion at start --- O(1)
    appendAtStart(value) {
        let newNode = new Node(value)
        if (!this.head) {
            newNode.next = newNode
            this.head = newNode
        }
        else {
            let current = this.head
            while (current.next !== this.head) {
                current = current.next
            }
            current.next = newNode
            newNode.next = this.head
            this.head = newNode
        }
    }

    // Insertion at end
    appendAtEnd(value) {
        let newNode = new Node(value)
        if (!this.head) {
            newNode.next = newNode
            this.head = newNode
        }
        else {
            let current = this.head
            while (current.next.next !== this.head) {
                current = current.next
            }
            current.next.next = newNode
            newNode.next = this.head
        }
    }

    // Append at any position
    appendAtMiddle(val, pos) {
        let newNode = new Node(val)
        if (pos < 0) {
            throw new Error('Error')
        }
        else if (!this.head) {
            if (pos == 0) {
                newNode.next = this.head
                this.head = newNode
            }
        }
        else if(pos == 0){
            let current = this.head
            while(current.next !== this.head){
                current = current.next
            }
            newNode.next = current.next
            this.head = newNode
            current.next = this.head
        }
        else {
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

    // Delete at start -- O(1)
    deleteAtStart() {
        if (!this.head) {
            throw new Error('LL is empty')
        }
        let current = this.head
        while (current.next !== this.head) {
            current = current.next
        }
        current.next = this.head.next
        this.head = current.next
    }

}

const circularLL = new CircularLinkedList()

circularLL.appendAtStart(4)
circularLL.appendAtStart(3)
circularLL.appendAtStart(2)
circularLL.appendAtStart(1)

circularLL.appendAtEnd(5)
circularLL.appendAtEnd(6)
circularLL.appendAtEnd(7)

circularLL.appendAtMiddle(4.5, 4)
circularLL.appendAtMiddle(0, 0)

circularLL.deleteAtStart()

circularLL.print()
