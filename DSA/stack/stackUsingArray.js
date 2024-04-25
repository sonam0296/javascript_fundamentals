/**
 *  What is Stack? 
 *  Stack is a data structure where element added at last will be removed first. 
 *  It follow LIFO (Last In First Out) principle.
 *  It uses two methods to implement stack -> 
 *      1.) push(value) : This method is used to insert value at end of stack 
 *      2.) pop() : This method is used to remove value from the same end where the value was inserted.
 *  Implementation Of Stack using Array ----->>
 *     Step 1 -> Create a class for stack where all the operations will be done for adding & removing the values from stack.
 */

class Stack{
    constructor(){
        this.items = []
    }

    // push the values in stack
    push(element){
        this.items.push(element)
    }

    // Check if stack is empty
    isEmpty(){
        return this.items.length == 0
    }

    // Pop the values
    pop(){
        // console.log(this.isEmpty)
        if(this.isEmpty()){
            throw new Error("Stack is empty i.e Underflow")
        }
        return this.items.pop()
    }

    // Peek at top element of stack without removing it

    peek(){
        return !this.isEmpty() ? this.items[this.items.length - 1] : null
    }

    // clear stack

    clear(){
        this.items = []
    }

    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

stack.pop()

// stack.clear()

stack.print()

console.log("Top element:", stack.peek());