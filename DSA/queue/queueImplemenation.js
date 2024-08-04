/**
 * Queue - FIFO (First In First Out) 
 * 
 * It can be implement using array and linked list like stacks
 * 
 */

// Array Implementation

class QueueImplementationUsingArray {
    constructor() {
        this.items = []
    }

    // Adding element to queue
    enqueue(val) {
        this.items.push(val)
    }

    // Removing element from queue
    dequeue() {
        if (this.items.length <= 0) {
            throw new Error('Queue is empty')
        }
        return this.items.shift()
    }

    front() { // peek
        if (this.items.length <= 0) {
            return null
        }
        return this.items[0]
    }

    print() {
        return this.items
    }
}

const queueUsingArr = new QueueImplementationUsingArray()

queueUsingArr.enqueue(4)
queueUsingArr.enqueue(3)
queueUsingArr.enqueue(2)
queueUsingArr.enqueue(1)
// console.log("Before DeQueue -> ", queueUsingArr.print())

// queueUsingArr.dequeue()
// console.log("After DeQueue -> ", queueUsingArr.print())

// console.log("Front element in queue is -> ", queueUsingArr.front())



// Linked List 

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class QueueUsingLinkedList {
    constructor() {
        // front i.e from dequeue happens 
        this.front = null
        this.rear = null // end i.e from enqueue happens
        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node(val)
        if (!this.front) {
            newNode.next = this.front
            this.front = newNode
        }
        else {
            let current = this.front
            while (current.next) {
                current = current.next
            }
            newNode.next = null
            current.next = newNode
            this.size++
        }
    }

    dequeue(){
        if (this.size < 0) {
            throw new Error('Queue is empty!!')
        }
        this.front = this.front.next
        this.size--
        return this.front.value
    }

    print() {
        let current = this.front
        let res = []
        while (current) {
            res.push(current.value)
            current = current.next
        }
        console.log('Queue using -> ', res.join('->'))
    }
}

const queueUsingLL = new QueueUsingLinkedList()
queueUsingLL.enqueue(5)
queueUsingLL.enqueue(4)
queueUsingLL.enqueue(3)
queueUsingLL.enqueue(2)
queueUsingLL.enqueue(1)

queueUsingLL.dequeue()

queueUsingLL.print()