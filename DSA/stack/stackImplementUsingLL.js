/**
 * Stack can be implemented using arrays and linked list 
 * 1.) Array =>
 *  There is an issue with array implementation let's say we have fixed size of array at that time it will give us error i.e stack overflow
 * 
 * 2.) Linked list => 
 *  As linked list is a dynamic DS we can implement stack without any issues.
 */

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class StackUsingLinkedList{
    constructor(){
        this.head = null // head i.e top
    }

    push(val){
        const newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
    }

    pop(){
        if(this.size() === 0){
            return 'Empty Stack'
        }
        this.head = this.head.next
    }

    peek(){
        if(this.size() === 0){
            return 'Empty Stack'
        }

        console.log('Peek node is: ',this.head.value)
    }

    size(){
        let current = this.head
        let count = 0
        while(current){
            current = current.next
            count++
        }
        console.log('Size of stack is : ', count)
        return count
    }

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

const stackLL = new StackUsingLinkedList()

stackLL.push(1)
stackLL.push(2)
stackLL.push(3)
stackLL.push(4)
stackLL.push(5)
stackLL.push(6)

stackLL.pop()

stackLL.peek()

stackLL.size()

stackLL.print()
