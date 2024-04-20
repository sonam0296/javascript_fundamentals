// Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

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

    removeNthFromEnd(n) {
        let dummyNode = new Node(0);
        dummyNode.next = this.head
        let left = dummyNode;
        let right = this.head;

        // Update right and n
        while (n > 0 && right) {
            right = right.next;
            n -= 1;
        }

        // Move till right reaches null
        while (right) {
            left = left.next;
            right = right.next;
        }

        // Delete the node
        left.next = left.next.next;
        let result = []
        while(dummyNode.next){
            result.push(dummyNode.next.value)
            dummyNode = dummyNode.next
        }
        return result;
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

const linkedList = new LinkedList()

linkedList.appendAtEnd(1)
linkedList.appendAtEnd(2)
linkedList.appendAtEnd(3)
linkedList.appendAtEnd(4)
linkedList.appendAtEnd(5)

linkedList.print()

console.log(linkedList.removeNthFromEnd(2))