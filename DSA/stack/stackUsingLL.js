/**
 * Implement stack using Linked List -> 
 * 
 */

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null // B'coz at first stack is empty
        this.size = 0
    }

    // Push the data 
    push(value) {
        let newNode = new Node(value)
        if (!this.top) {
            this.top = newNode
        }
        else {
            newNode.next = this.top
            this.top = newNode
        }
        this.size ++
    }

    // Pop the data
    pop(){
        if (!this.top) {
            return null
        }
        // Data to be popped
        const poppedData = this.top.data
        this.top = this.top.next
        this.size --
        return poppedData
    }

    // 
    peekLL(){
        return this.top ? this.top.value : null
    }

    print(){
        let current = this.top
        let result = []
        while(current){
            result.push(current.value)
            current = current.next
        }
        console.log(result.join('->'))
    }
    
}

const stackUsingLL = new Stack()
stackUsingLL.push(1)
stackUsingLL.push(2)
stackUsingLL.push(3)
stackUsingLL.push(4)

stackUsingLL.pop()
console.log("Peek : ", stackUsingLL.peekLL())

stackUsingLL.print()
