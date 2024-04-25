/**
 * What is Queue?
 * -- Queue is a data structure in which element which is added first is removed first.
 * -- Queue uses FIFO(First In First Out) principle
 * -- Methods used to add and remove elements =>
 *      - Enqueue() : Add element at one end of queue ((Push()))
 *      - Dequeue() : Remove element at one end of queue  ((Shift()))
 */

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue() {
        if (this.isEmpty()) {
            return null // underflow
        }
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length == 0
    }

    peek(){
        if (this.isEmpty()) {
            return null // underflow
        }
        return this.items[0]
    }

    print() {
        console.log(this.items.join('-'))
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(queue.dequeue())
queue.print()
console.log("Peek => ",queue.peek())
